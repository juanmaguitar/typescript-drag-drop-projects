import ProjectState from "./ProjectState";
import Project, { ProjectStatus } from "./Project";
import Component from "./Component";
import ProjectItem from "./ProjectItem";
import { DragTarget } from "./DragAndDrop";
import { autobind } from "./utils";
/**
 * ProjectList Class
 *
 * Manages the rendering and display of project lists (either active or finished projects)
 * in the application UI.
 */
export default class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  /** Array of projects assigned to this list */
  assignedProjects: any[];

  /**
   * Creates a new ProjectList instance
   * @param type - The type of project list ('active' or 'finished')
   * @param projectState - The project state management instance
   */
  constructor(private type: ProjectStatus, private projectState: ProjectState) {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @autobind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @autobind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData("text/plain");
    this.projectState.moveProject(projectId, this.type);
  }

  @autobind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);

    this.projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        return project.status === this.type;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  /**
   * Renders the initial content structure
   * Sets up the list ID and header text
   */
  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  /**
   * Renders the list of projects in the UI
   * Creates and appends list items for each project
   */
  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }
}

import Project from "./Project";
import { ProjectStatus } from "./Project";

interface Listener<T> {
  (items: T[]): void;
}

class State<T> {
  protected listeners: Listener<T>[] = [];
}

/**
 * Project State Management
 *
 * Class responsible for managing the state of projects in the application.
 * Implements the Singleton pattern to ensure only one instance exists.
 */
export default class ProjectState extends State<Project> {
  /** Array of project objects */
  private projects: Project[] = [];

  /** Single instance of ProjectState */
  private static instance: ProjectState;

  /** Private constructor to prevent direct instantiation */
  private constructor() {
    super();
  }

  /**
   * Gets the singleton instance of ProjectState
   * @returns The ProjectState instance
   */
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  /**
   * Adds a listener function to be notified of state changes
   * @param listenerFn Function to be called when state changes
   */
  addListener(listenerFn: Listener<Project>) {
    this.listeners.push(listenerFn);
  }

  /**
   * Creates and adds a new project to the state
   * @param title Title of the project
   * @param description Description of the project
   * @param numOfPeople Number of people assigned to the project
   */
  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );

    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

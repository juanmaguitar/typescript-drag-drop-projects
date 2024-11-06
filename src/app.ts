import { ProjectState } from "./ProjectState";
import { ProjectList } from "./ProjectList";
import { ProjectInput } from "./ProjectInput";
import { ProjectStatus } from "./Project";

const projectState = ProjectState.getInstance();

new ProjectInput(projectState);
new ProjectList(ProjectStatus.Active, projectState);
new ProjectList(ProjectStatus.Finished, projectState);

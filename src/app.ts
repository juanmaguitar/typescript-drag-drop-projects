import ProjectState from "./ProjectState";
import ProjectList from "./ProjectList";
import ProjectInput from "./ProjectInput";

const projectState = ProjectState.getInstance();

const prjInput = new ProjectInput(projectState);
const activePrjList = new ProjectList("active", projectState);
const finishedPrjList = new ProjectList("finished", projectState);

console.log(prjInput);
console.log(activePrjList);
console.log(finishedPrjList);

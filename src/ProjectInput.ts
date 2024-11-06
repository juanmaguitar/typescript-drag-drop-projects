import { validate, autobind } from "./utils";
import type { Validatable } from "./utils";
import { Component } from "./Component";
import { ProjectState } from "./ProjectState";

/**
 * ProjectInput Class
 *
 * Handles the creation and management of the project input form.
 * Allows users to input project details and validates the input before submission.
 */
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  /** Input field for project title */
  titleInputElement!: HTMLInputElement;
  /** Input field for project description */
  descriptionInputElement!: HTMLInputElement;
  /** Input field for number of people */
  peopleInputElement!: HTMLInputElement;

  /**
   * Creates a new ProjectInput instance
   * @param projectState - The project state management instance
   */
  constructor(private projectState: ProjectState) {
    super("project-input", "app", true, "user-input");

    this.configure();
  }

  /**
   * Configures event listeners for the form
   */
  configure() {
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

  /**
   * Gathers and validates user input from the form
   * @returns A tuple of [title, description, people] if valid, void if invalid
   */
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  /**
   * Clears all input fields in the form
   */
  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  /**
   * Handles form submission
   * Prevents default form behavior, validates input and adds project if valid
   * @param event - The form submission event
   */
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      this.projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}

export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  /** Template element for the project list structure */
  templateElement: HTMLTemplateElement;
  /** Root element where project list will be inserted */
  hostElement: T;
  /** The main section element for this project list */
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  /**
   * Attaches the project list section to the DOM
   */
  private attach(insertAtBeginning: boolean = false) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

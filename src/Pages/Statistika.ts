import { Component } from "../Abstract/Component";
import { TServices } from "../Abstract/Types";



export class Statistika extends Component {
  constructor(parrent: HTMLElement, private services: TServices) {
    super(parrent, "div", ["statistika"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Statistika");
  }
}
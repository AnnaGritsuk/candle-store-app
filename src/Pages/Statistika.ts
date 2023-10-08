import { Component } from "../Abstract/Component";



export class Statistika extends Component {
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["statistika"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Statistika");
  }
}
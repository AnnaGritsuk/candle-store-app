import { Component } from "../Abstract/Component";
import { TServices } from "../Abstract/Types";


export class Korzina2 extends Component {
  constructor(parrent: HTMLElement, private services: TServices) {
    super(parrent, "div", ["korzina2"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Korzina2");
  }
}
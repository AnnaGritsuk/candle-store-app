import { Component } from "../Abstract/Component";
import { TServices } from "../Abstract/Types";



export class Korzina1 extends Component {
  constructor(parrent: HTMLElement, private services: TServices) {
    super(parrent, "div", ["korzina1"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Korzina1");
  }
}
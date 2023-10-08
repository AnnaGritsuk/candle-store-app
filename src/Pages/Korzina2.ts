import { Component } from "../Abstract/Component";


export class Korzina2 extends Component {
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["korzina2"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Korzina2");
  }
}
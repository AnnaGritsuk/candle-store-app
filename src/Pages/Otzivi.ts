import { Component } from "../Abstract/Component";



export class Otzivi extends Component {
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["otzivi"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Otzivi");
  }
}
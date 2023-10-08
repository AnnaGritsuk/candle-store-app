import { Component } from "../Abstract/Component";



export class Katalog extends Component {
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["katalog"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Katalog");
  }
}
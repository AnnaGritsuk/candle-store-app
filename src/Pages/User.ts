import { Component } from "../Abstract/Component";



export class User extends Component {
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["user"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "User");
  }
}
import { Component } from "../Abstract/Component";

export class MainPage extends Component{
constructor(parrent: HTMLElement) {
    super(parrent, "div", ["mainpage"]);
    new Component (this.root, 'img', null , null, ["src", "alt"],["./assets/o_nas.png", "o_nas"]);

}
}

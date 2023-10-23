import { Component } from "../Abstract/Component";
import { TServices } from "../Abstract/Types";

export class MainPage extends Component{
constructor(parrent: HTMLElement, private services: TServices) {
    super(parrent, "div", ["mainpage"]);
    new Component (this.root, 'img', null , null, ["src", "alt"],["./assets/o_nas.png", "o_nas"]);

}
}

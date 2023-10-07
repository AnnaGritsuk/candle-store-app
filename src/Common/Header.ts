import { Component } from "../Abstract/Component";
export class Header extends Component{
    constructor(parrent: HTMLElement) {
        super(parrent, "div", ["header"]);
        const header = new Component (this.root,'header',["header"]);
        const container = new Component (header.root, 'div',["container"]);
        const headin = new Component (container.root, 'div', ["headin"]);

        const nav1 = new Component (headin.root, 'div', ["nav1"]);
        const nav_katalog = new Component (nav1.root, 'a', ["nav_katalog"], null,["href"],["#"]);
        new Component (nav_katalog.root, 'img', null , null, ["src", "alt"],["./assets/katalog.png", "katalog"]);
        const nav_statistika = new Component (nav1.root, 'a', ["nav_statistika"], null,["href"],["#"]);
        new Component (nav_statistika.root, 'img', null , null, ["src", "alt"],["./assets/statistika.png", "statistika"]);
        
        const logo = new Component (headin.root, 'a',["logo"], "CANDLIK", ["href"], ["#"]);

        const nav2 = new Component (headin.root, 'div', ["nav2"]);
        const nav_korzina = new Component (nav2.root, 'a', ["nav_korzina"], null,["href"],["#"]);
        new Component (nav_korzina.root, 'img', null , null, ["src", "alt"],["./assets/korzina.png", "korzina"]); 
        const nav_user = new Component (nav2.root, 'a', ["nav_user"], null,["href"],["#"]);
        new Component (nav_user.root, 'img', null , null, ["src", "alt"],["./assets/user.png", "user"]);
        
         
    }
    }

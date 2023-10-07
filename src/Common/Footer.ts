import { Component } from "../Abstract/Component";

export class Footer extends Component{
constructor(parrent: HTMLElement) {
    super(parrent, "div", ["footer"]);
    const footer = new Component (this.root,'footer',["footer"]);
    const container = new Component (footer.root, 'div',["container"]);
    const footerin = new Component (container.root, 'div', ["footerin"]);

    const information = new Component (footerin.root,'div', ["foot__info"]);
    new Component (information.root, 'p', ["foot__text"], "Наши контакты:");
    new Component (information.root, 'p', ["foot__text"], "МТС: +375-33-333-33-33");  
    new Component (information.root, 'p', ["foot__text"], "Почта: candlik@gmail.com");
    new Component (information.root, 'p', ["foot__text"], "Грицюк Анна, ЭМ-3");


    const address = new Component (footerin.root,'div', ["foot__address"]);
    new Component (address.root, 'p', ["foot__text"], "Адрес:");
    new Component (address.root, 'p', ["foot__text"], "г.Брест, мастерская");
    new Component (address.root, 'p', ["foot__text"], "“Candlik”");

    const web = new Component (footerin.root,'div', ["foot__web"]);
    new Component (web.root, 'p', ["foot__text"], "Следите за нами в соцсетях:");
    
    const web_social = new Component (web.root,'div', ["foot__web-social"]);
    const web_inst = new Component (web_social.root, 'a', ["web_inst"], null,["href"],["#"]);
    new Component (web_inst.root, 'img', null , null, ["src", "alt"],["./assets/inst.png", "inst"]);

    const web_tg = new Component (web_social.root, 'a', ["web_tg"], null,["href"],["#"]);
    new Component (web_tg.root, 'img', null , null, ["src", "alt"],["./assets/tg.png", "tg"]);

    new Component (web.root, 'a', ["foot__text"], "Figma", ["href"],["#"]);
    new Component (web.root, 'a', ["foot__text"], "GitHub", ["href"],["#"]);




    

    

}
}

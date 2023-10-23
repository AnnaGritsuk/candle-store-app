import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Component } from "../Abstract/Component";
import { TServices } from "../Abstract/Types";



export class Autorization extends Component {
    regButton: Component;
  outButton: Component;
  constructor(parrent: HTMLElement, private services: TServices) {
    super(parrent, "div", ["autorization"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', ["autorization-h1"], "Autorization");



//кнопка
    this.regButton = new Component(container.root, 'input', ["auth__btn"], null, ["type", "value"], ["button", "Log in using Google"]);
    this.regButton.root.onclick = () => {
      this.services.authService.authWidthGoogle();
    }
//кнопка выхода
    this.outButton = new Component(container.root, 'input', ["auth__btn"], null, ["type", "value"], ["button", "Log out"]);
    this.outButton.root.onclick = () => {
      this.services.authService.outFromGoogle();
    }


    const user = this.services.authService.user;
      if (user) {
      this.toggleButton(true);
      // window.location.reload();
    } else {
      this.toggleButton(false);
    }

    this.services.authService.addListener('userAuth', (isAuthUser) => {
      if (isAuthUser) {
        this.toggleButton(true)
      } else {
        this.toggleButton(false)
      }
    })
  }
  


  toggleButton(isAuthUser: boolean): void {
    if (isAuthUser) {
      this.regButton.remove();
      this.outButton.render();
    } else {
      this.regButton.render();
      this.outButton.remove();
    }
  }
}
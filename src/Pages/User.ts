import { getAuth, signOut } from "firebase/auth";
import { Component } from "../Abstract/Component";



export class User extends Component {
  
  outButton: Component;
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["user"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', null, "Ваш аккаунт");


//НАПИСАТЬ НАПОЛНЕНИЕ


    //кнопка выхода
    this.outButton = new Component(container.root, 'input', ["auth__btn"], null, ["type", "value"], ["button", "Log out"]);
    this.outButton.root.onclick = () => {
      this.outFromGoogle();
    }
  }



  outFromGoogle(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.reload();
        // this.toggleButton(false);
      })
      .catch(() => {
        console.log('bad');
      });
  }
}
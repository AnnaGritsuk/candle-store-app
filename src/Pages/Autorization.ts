import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Component } from "../Abstract/Component";



export class Autorization extends Component {
    regButton: Component;
  outButton: Component;
  constructor(parrent: HTMLElement) {
    super(parrent, "div", ["autorization"]);
    const container = new Component(this.root, 'div', ["container"]);
    new Component(container.root, 'h1', ["autorization-h1"], "Autorization");



//кнопка
    this.regButton = new Component(container.root, 'input', ["auth__btn"], null, ["type", "value"], ["button", "Log in using Google"]);
    this.regButton.root.onclick = () => {
      this.authWidthGoogle();
      console.log('lol');
    }
//кнопка выхода
    this.outButton = new Component(container.root, 'input', ["auth__btn"], null, ["type", "value"], ["button", "Log out"]);
    this.outButton.root.onclick = () => {
      this.outFromGoogle();
    }




    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.toggleButton(true);
      // window.location.reload();
    } else {
      this.toggleButton(false);
    }
  }

  authWidthGoogle(): void {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        this.toggleButton(true);
        window.location.reload();
      })
      .catch(() => {
        console.log('bad');
      });
  }

  outFromGoogle(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.toggleButton(false);
      })
      .catch(() => {
        console.log('bad');
      });
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
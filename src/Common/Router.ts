
import { Component } from "../Abstract/Component";
import { getAuth } from "firebase/auth";

export class Router {
  constructor(public links: Record<string, Component>) {
    this.openPage();

    window.onhashchange = () => {
      this.openPage();
    }
  }

  openPage() {
    Object.values(this.links).forEach((el) => el.remove());

    const url = window.location.hash.slice(1);

    const auth = getAuth();
   const user = auth.currentUser;

    if (url === 'user' && !user) {
      this.links['#autorization'].render();
    } else {
      this.links['#' + url].render();
    }
  }
}
// import { getAuth } from "firebase/auth";
import { Component } from "../Abstract/Component";

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

    this.links ["#" + url].render();
    // const auth = getAuth();
    // const user = auth.currentUser;

    // if (url === 'reviews' && !user) {
    //   this.links['#authorization'].render();
    // } else {
    //   this.links['#' + url].render();
    // }
  }
}
import './style.scss';
import { Component } from './Abstract/Component';
import { Header } from './Common/Header';
import { Footer } from './Common/Footer';
import { MainPage } from './Pages/MainPage';
import { Katalog } from './Pages/Katalog';
import { Korzina1 } from './Pages/Korzina1';
import { Korzina2 } from './Pages/Korzina2';
import { Otzivi } from './Pages/Otzivi';
import { Statistika } from './Pages/Statistika';
import { Router } from './Common/Router';
import { User } from './Pages/User';

const body = document.body;
class App{
  constructor(parrent: HTMLElement){
    const wrap = new Component(body, 'div', ["wrapper"]);
    new Header(wrap.root);
    const main = new Component(wrap.root, "main");

    const links = {
      "#": new MainPage(main.root),
      "#katalog": new Katalog(main.root),
      "#korzina1": new Korzina1(main.root),
      "#korzina2": new Korzina2(main.root),
      "#otzivi": new Otzivi(main.root),
      "#statistika": new Statistika(main.root),
      "#user": new User(main.root),
    }
    new Router(links);
    new Footer(wrap.root);
    


  }
}

declare global {
  interface Window {
    app: App;
  }
}

window.app=new App(document.body);
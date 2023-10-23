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
import { Autorization } from './Pages/Autorization';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../configFB";
import { AuthService } from './Services/AuthService';
import { LogicService } from './Services/LogicService';

const body = document.body;
initializeApp(firebaseConfig);


const services = {
  authService: new AuthService(),
  logicService: new LogicService()
};

class App{
  constructor(parrent: HTMLElement){
    const wrap = new Component(body, 'div', ["wrapper"]);
    new Header(wrap.root, services);
    const main = new Component(wrap.root, "main");

    const links = {
      "#": new MainPage(main.root, services),
      "#katalog": new Katalog(main.root, services),
      "#korzina1": new Korzina1(main.root, services),
      "#korzina2": new Korzina2(main.root, services),
      "#otzivi": new Otzivi(main.root, services),
      "#statistika": new Statistika(main.root, services),
      "#user": new User(main.root, services),
      "#autorization": new Autorization(main.root, services),
    }
    new Router(links, services);
    new Footer(wrap.root);
    


  }
}

declare global {
  interface Window {
    app: App;
  }
}

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  services.authService.user=user;
  if (!window.app) window.app = new App(document.body);
}
)

import './style.scss';
import { Component } from './Abstract/Component';

const body = document.body;
const btn1 = new Component(body, 'input', ["btnspace"], null, ["type", "value"], ["button", "Отобразить"]);
const btn2 = new Component(body, 'input', ["btnspace"], null, ["type", "value"], ["button", "Удалить"]);
const prg = new Component(body, 'p', null, 'London is the capital of Great Britan and Sherlock rulit');
btn2.root.onclick = () => {
  prg.remove();
}
btn1.root.onclick = () => {
  prg.render();
}
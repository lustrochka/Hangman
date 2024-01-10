import { Main } from './scripts/main';
import { Controller } from './scripts/controller';
import './style.css';

const main = new Main();
document.body.appendChild(main.render());

const controller = new Controller();
controller.addListeners();

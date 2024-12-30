import { Model } from './model';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Controller {
  constructor() {
    this.model = new Model();
  }
  addListeners() {
    const keyboard = document.querySelector('.keyboard');
    const button = document.querySelector('.button');

    keyboard.addEventListener('click', (event) => {
      this.checkVirtualKey(event);
    });
    document.addEventListener('keydown', (event) => {
      this.checkKey(event);
    });
    button.addEventListener('click', () => {
      this.rerender();
    });
  }
  checkVirtualKey(event) {
    if (event.target.classList.contains('key') && !event.target.classList.contains('disabled')) {
      this.model.checkLetter(event.target.innerText);
      event.target.classList.add('disabled');
    }
  }
  checkKey(event) {
    const key = document.getElementById(event.key.toUpperCase());
    if (LETTERS.includes(event.key.toUpperCase()) && !key.classList.contains('disabled')) {
      this.model.checkLetter(event.key.toUpperCase());
      key.classList.add('disabled');
    }
  }
  rerender() {
    this.model.renderView();
    this.addListeners();
  }
}

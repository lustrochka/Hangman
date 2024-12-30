import { Model } from './model';
import { View } from './view';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
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
      this.manageView(event.target.innerText);
    }
    event.target.classList.add('disabled');
  }

  checkKey(event) {
    const key = document.getElementById(event.key.toUpperCase());
    if (LETTERS.includes(event.key.toUpperCase()) && !key.classList.contains('disabled')) {
      this.manageView(event.key.toUpperCase());
      key.classList.add('disabled');
    }
  }

  manageView(letter) {
    const result = this.model.checkLetter(letter);
    console.log(result);
    if (result.found) {
      this.view.updateWord(result.positions, letter);
      if (this.model.checkVictory()) this.view.showVictory();
    } else {
      this.view.showHangman(this.model.getAttempts());
      if (result.isGameOver) {
        this.view.showGameOver();
      }
    }
  }

  rerender() {
    this.view.render();
    this.model.resetAttempts();
    this.addListeners();
  }
}

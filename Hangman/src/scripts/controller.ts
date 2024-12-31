import { Model } from './model';
import { View } from './view';
import { getDOMElement } from '../utils/getDOMElement';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Controller {
  model: Model;
  view: View;

  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  addListeners() {
    const keyboard = getDOMElement<HTMLDivElement>('.keyboard');
    const button = getDOMElement<HTMLButtonElement>('.button');

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

  checkVirtualKey(event: MouseEvent) {
    if (event.target instanceof HTMLDivElement) {
      console.log(event.target);
      if (event.target.classList.contains('key') && !event.target.classList.contains('disabled')) {
        this.manageView(event.target.innerText);
        event.target.classList.add('disabled');
      }

    }
  }

  checkKey(event: KeyboardEvent) {
    try {
      const key = getDOMElement<HTMLDivElement>(`#${event.key.toUpperCase()}`);
      if (LETTERS.includes(event.key.toUpperCase()) && !key.classList.contains('disabled')) {
        this.manageView(event.key.toUpperCase());
        key.classList.add('disabled');
      }
    } catch {}
  }

  manageView(letter: string) {
    const result = this.model.checkLetter(letter);
    if (result.found) {
      this.view.updateWord(result.positions, letter);
      if (this.model.checkVictory()) this.view.showModal('You win!');
    } else {
      this.view.showHangman(this.model.getAttempts());
      if (result.isGameOver) {
        this.view.showModal('Game over');
      }
    }
  }

  rerender() {
    this.view.render();
    this.model.resetAttempts();
    this.addListeners();
  }
}

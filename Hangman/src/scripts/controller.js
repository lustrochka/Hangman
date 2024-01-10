import { Model } from './model';

const LETTERS = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ';

export class Controller {
  constructor() {
    this.model = new Model();
  }
  addListeners() {
    const keyboard = document.querySelector('.keyboard');

    keyboard.addEventListener('click', (event) => {
      this.checkVirtualKey(event);
    });
    document.addEventListener('keydown', (event) => {
      this.checkKey(event);
    });
  }
  checkVirtualKey(event) {
    if (event.target.classList.contains('key') && !event.target.classList.contains('disabled')) {
      this.model.checkLetter(event.target.innerText);
      event.target.classList.add('disabled');
    }
  }
  checkKey(event) {
    if (LETTERS.includes(event.key.toUpperCase())) {
      this.model.checkLetter(event.key.toUpperCase());
    }
  }
}

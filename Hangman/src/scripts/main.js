import { Keyboard } from './keyboard';
import { Question } from './question';
import { Gallows } from './gallows';
import answers from '../answers.json';

export class Main {
  render() {
    const main = document.createElement('div');
    main.classList.add('main');

    const question = new Question(this.randomize());
    main.appendChild(question.render());

    const gallows = new Gallows();
    main.appendChild(gallows.render());

    const keyboard = new Keyboard();
    main.appendChild(keyboard.render());

    return main;
  }
  randomize() {
    const randomIdx = Math.floor(Math.random() * answers.length);
    localStorage.setItem('index', randomIdx);
    return randomIdx;
  }
}

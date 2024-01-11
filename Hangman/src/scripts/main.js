import { Keyboard } from './keyboard';
import { Question } from './question';
import { Gallows } from './gallows';
import { Modal } from './modal';
import answers from '../answers.json';

export class Main {
  render() {
    const main = document.createElement('div');
    main.classList.add('main');

    const randomIdx = this.randomize();
    localStorage.setItem('index', randomIdx);

    const question = new Question(randomIdx);
    main.appendChild(question.render());

    const gallows = new Gallows();
    main.appendChild(gallows.render());

    const keyboard = new Keyboard();
    main.appendChild(keyboard.render());

    const modal = new Modal(answers[randomIdx]['answer']);
    main.appendChild(modal.render());

    return main;
  }
  randomize() {
    return Math.floor(Math.random() * answers.length);
  }
}

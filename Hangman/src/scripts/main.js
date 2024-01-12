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

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    main.appendChild(wrapper);

    const gallows = new Gallows();
    wrapper.appendChild(gallows.render());

    const quizBlock = document.createElement('div');
    quizBlock.classList.add('quiz-block');
    wrapper.appendChild(quizBlock);

    const question = new Question(randomIdx);
    quizBlock.appendChild(question.render());

    const keyboard = new Keyboard();
    quizBlock.appendChild(keyboard.render());

    const modal = new Modal(answers[randomIdx]['answer']);
    wrapper.appendChild(modal.render());

    return main;
  }
  randomize() {
    return Math.floor(Math.random() * answers.length);
  }
}

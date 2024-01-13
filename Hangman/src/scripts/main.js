import { Keyboard } from './keyboard';
import { Question } from './question';
import { Gallows } from './gallows';
import { Modal } from './modal';
import answers from '../answers.json';

export class Main {
  constructor() {
    this.playedWords = [];
    this.randomIdx;
  }
  render() {
    this.randomize();

    const main = document.createElement('div');
    main.classList.add('main');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    main.appendChild(wrapper);

    const gallows = new Gallows();
    wrapper.appendChild(gallows.render());

    const quizBlock = document.createElement('div');
    quizBlock.classList.add('quiz-block');
    wrapper.appendChild(quizBlock);

    const question = new Question(this.randomIdx);
    quizBlock.appendChild(question.render());

    const keyboard = new Keyboard();
    quizBlock.appendChild(keyboard.render());

    const modal = new Modal(answers[this.randomIdx]['answer']);
    wrapper.appendChild(modal.render());

    return main;
  }
  randomize() {
    if (this.playedWords.length === answers.length) this.playedWords = [];
    let randomIdx = Math.floor(Math.random() * answers.length);
    while (this.playedWords.includes(randomIdx)) {
      randomIdx = Math.floor(Math.random() * answers.length);
      console.log(randomIdx, this.playedWords);
    }
    this.randomIdx = randomIdx;
    this.playedWords.push(randomIdx);
    localStorage.setItem('index', randomIdx);
  }
}

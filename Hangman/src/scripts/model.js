import { Main } from './main';
import answers from '../answers.json';

export class Model {
  constructor() {
    this.attempts = 0;
    this.main = new Main();
  }
  renderView() {
    document.body.innerHTML = '';
    document.body.appendChild(this.main.render());
    this.attempts = 0;
  }
  checkLetter(letter) {
    const displayingWord = document.querySelector('.word');
    const displayingAttempts = document.querySelector('.attempts');
    const modal = document.querySelector('.background');
    const message = document.querySelector('.message');
    const index = localStorage.getItem('index');
    let word = answers[index]['answer'];
    if (word.includes(letter)) {
      let searchIdx = 0;
      while (word.indexOf(letter, searchIdx) !== -1) {
        const text = displayingWord.innerText;
        const position = word.indexOf(letter, searchIdx);
        searchIdx = position + 1;
        displayingWord.innerText = `${text.slice(0, position)}${letter}${text.slice(position + 1)}`;
      }
      if (!displayingWord.innerText.includes('_')) {
        modal.classList.add('visible');
        message.innerText = 'You win!';
      }
    } else {
      if (this.attempts < 6) {
        displayingAttempts.innerText = `Wrong answers: ${++this.attempts} / 6`;
        document.querySelectorAll('.hangman')[this.attempts - 1].classList.add('visible');
        if (this.attempts === 6) {
          modal.classList.add('visible');
          message.innerText = 'Game over';
        }
      }
    }
  }
}

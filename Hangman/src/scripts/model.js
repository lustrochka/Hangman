import { Main } from './main';
import answers from '../answers.json';

export class Model {
  constructor() {
    this.attempts = 0;
    this.main = new Main();
  }

  resetAttempts() {
    this.attempts = 0;
  }

  getAttempts() {
    return this.attempts;
  }

  checkLetter(letter) {
    const index = localStorage.getItem('index');
    let word = answers[index]['answer'];
    const result = { found: false, positions: [], isGameOver: false };

    if (word.includes(letter)) {
      let searchIdx = 0;
      while (word.indexOf(letter, searchIdx) !== -1) {
        const position = word.indexOf(letter, searchIdx);
        searchIdx = position + 1;
        result.positions.push(position);
      }
      result.found = true;
    } else {
      this.attempts++;
      result.isGameOver = this.attempts === 6;
    }
    return result;
  }

  checkVictory() {
    const displayingWord = document.querySelector('.word');
    return !displayingWord.innerText.includes('_');
  }
}

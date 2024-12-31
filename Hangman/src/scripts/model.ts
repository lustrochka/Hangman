import { Main } from './main';
import answers from '../answers.json';
import { getDOMElement } from '../utils/getDOMElement';

export class Model {
  attempts: number;
  main: Main;

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

  checkLetter(letter: string) {
    const index = Number(localStorage.getItem('index'));
    let word = answers[index]['answer'];
    const result: { found: boolean, positions: number[], isGameOver: boolean } = { found: false, positions: [], isGameOver: false };

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
    const displayingWord = getDOMElement<HTMLDivElement>('.word');
    return !displayingWord.innerText.includes('_');
  }
}

import answers from '../answers.json';

export class Model {
  constructor() {
    this.attempts = 0;
  }
  checkLetter(letter) {
    const displayingWord = document.querySelector('.word');
    const displayingAttempts = document.querySelector('.attempts');
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
    } else {
      displayingAttempts.innerText = `Неправильных ответов: ${++this.attempts} / 6`;
    }
  }
}

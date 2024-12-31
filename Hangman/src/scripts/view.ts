import { Main } from './main';
import { getDOMElement } from '../utils/getDOMElement';

export class View {
  render() {
    const main = new Main();
    document.body.innerHTML = '';
    document.body.appendChild(main.render());
  }

  updateWord(positions: number[], letter: string) {
    const displayingWord = getDOMElement<HTMLDivElement>('.word');
    positions.forEach((pos) => {
      const text = displayingWord.innerText;
      displayingWord.innerText = `${text.slice(0, pos)}${letter}${text.slice(pos + 1)}`;
    });
  }

  showModal(text: string) {
    const modal = getDOMElement<HTMLDivElement>('.background');
    const message = getDOMElement<HTMLDivElement>('.message');

    modal.classList.add('visible');
    message.innerText = text;
  }

  showHangman(attempts: number) {
    const displayingAttempts = getDOMElement<HTMLDivElement>('.attempts');
    displayingAttempts.innerText = `Wrong answers: ${attempts} / 6`;

    document.querySelectorAll('.hangman')[attempts - 1].classList.add('visible');
  }
}

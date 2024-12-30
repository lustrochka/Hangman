import { Main } from './main';

export class View {
  render() {
    const main = new Main();
    document.body.innerHTML = '';
    document.body.appendChild(main.render());
  }

  updateWord(positions, letter) {
    const displayingWord = document.querySelector('.word');
    positions.forEach((pos) => {
      const text = displayingWord.innerText;
      displayingWord.innerText = `${text.slice(0, pos)}${letter}${text.slice(pos + 1)}`;
    });
  }

  showVictory() {
    const modal = document.querySelector('.background');
    const message = document.querySelector('.message');

    modal.classList.add('visible');
    message.innerText = 'You win!';
  }

  showGameOver() {
    const modal = document.querySelector('.background');
    modal.classList.add('visible');

    const message = document.querySelector('.message');
    message.innerText = 'Game over';
  }

  showHangman(attempts) {
    const displayingAttempts = document.querySelector('.attempts');
    displayingAttempts.innerText = `Wrong answers: ${attempts} / 6`;

    document.querySelectorAll('.hangman')[attempts - 1].classList.add('visible');
  }
}

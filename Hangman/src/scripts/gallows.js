import GallowsSrc from '../assets/viselitsa.svg';

export class Gallows {
  render() {
    const gallowsBlock = document.createElement('div');
    gallowsBlock.classList.add('gallows');

    const gallows = document.createElement('img');
    gallows.src = GallowsSrc;
    gallows.classList.add('gallows');
    gallowsBlock.appendChild(gallows);

    const hangman1 = document.createElement('div');
    hangman1.innerText = '◯';
    hangman1.classList.add('hangman');
    gallowsBlock.appendChild(hangman1);

    const hangman2 = document.createElement('div');
    hangman2.innerText = '|';
    hangman2.classList.add('hangman');
    gallowsBlock.appendChild(hangman2);

    const hangman3 = document.createElement('div');
    hangman3.innerText = '/';
    hangman3.classList.add('hangman');
    gallowsBlock.appendChild(hangman3);

    const hangman4 = document.createElement('div');
    hangman4.innerText = '\\';
    hangman4.classList.add('hangman');
    gallowsBlock.appendChild(hangman4);

    const hangman5 = document.createElement('div');
    hangman5.innerText = '/';
    hangman5.classList.add('hangman');
    gallowsBlock.appendChild(hangman5);

    const hangman6 = document.createElement('div');
    hangman6.innerText = '\\';
    hangman6.classList.add('hangman');
    gallowsBlock.appendChild(hangman6);

    return gallowsBlock;
  }
}

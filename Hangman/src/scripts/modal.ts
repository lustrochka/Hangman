export class Modal {
  word: string;

  constructor(word: string) {
    this.word = word;
  }
  render() {
    const background = document.createElement('div');
    background.classList.add('background');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    background.appendChild(modal);

    const message = document.createElement('div');
    message.classList.add('message');
    modal.appendChild(message);

    const secretWord = document.createElement('div');
    secretWord.classList.add('secret-word');
    secretWord.innerText = `Answer: ${this.word}`;
    modal.appendChild(secretWord);

    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Play again';
    modal.appendChild(button);

    return background;
  }
}

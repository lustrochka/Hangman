export class Modal {
  constructor(word) {
    this.word = word;
  }
  render() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const message = document.createElement('div');
    message.classList.add('message');
    modal.appendChild(message);

    const secretWord = document.createElement('div');
    secretWord.classList.add('secret-word');
    secretWord.innerText = this.word;
    modal.appendChild(secretWord);

    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Играть снова';
    modal.appendChild(button);

    return modal;
  }
}

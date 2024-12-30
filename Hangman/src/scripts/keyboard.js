import { Key } from './key';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Keyboard {
  render() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    LETTERS.split('').forEach((letter) => {
      const key = new Key(letter);
      keyboard.appendChild(key.render());
    });
    return keyboard;
  }
}

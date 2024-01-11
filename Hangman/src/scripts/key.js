export class Key {
  constructor(letter) {
    this.letter = letter;
  }
  render() {
    const key = document.createElement('div');
    key.innerText = this.letter;
    key.classList.add('key');
    key.id = `${this.letter}`;
    return key;
  }
}

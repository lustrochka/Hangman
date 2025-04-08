export class Key {
  letter: string;
  
  constructor(letter: string) {
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

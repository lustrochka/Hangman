import { Keyboard } from './keyboard';
import { Question } from './question';
import answers from '../answers.json';

export class Main {
  render() {
    const main = document.createElement('div');
    main.classList.add('main');

    const question = new Question(this.randomize());
    main.appendChild(question.render());

    const keyboard = new Keyboard();
    main.appendChild(keyboard.render());

    return main;
  }
  randomize() {
    return Math.floor(Math.random() * answers.length);
  }
}

/*document.addEventListener('keydown', (event) => {
  console.log(event.code, event.key);
});*/

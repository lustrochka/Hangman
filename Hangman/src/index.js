import { Keyboard } from './scripts/keyboard';
import './style.css';

document.addEventListener('keydown', (event) => {
  console.log(event.code, event.key);
});

const keyboard = new Keyboard();
document.body.appendChild(keyboard.render());

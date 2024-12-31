import { image } from './image';

export class Gallows {
  render() {
    const gallows = document.createElement('div');
    gallows.classList.add('gallows-block');
    gallows.innerHTML = image;

    return gallows;
  }
}

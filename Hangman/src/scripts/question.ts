import answers from '../answers.json';

export class Question {
  index: number;

  constructor(index: number) {
    this.index = index;
  }
  render() {
    const question = document.createElement('div');
    question.classList.add('question');

    const word = document.createElement('div');
    word.classList.add('word');
    question.appendChild(word);
    word.innerText = `${'_'.repeat(answers[this.index]['answer'].length)}`;

    const hint = document.createElement('div');
    hint.classList.add('hint');
    question.appendChild(hint);
    hint.innerText = `${answers[this.index]['question']}`;

    const attempts = document.createElement('div');
    attempts.classList.add('attempts');
    question.appendChild(attempts);
    attempts.innerText = 'Wrong answers: 0 / 6';
    return question;
  }
}

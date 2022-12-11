import readlineSync from 'readline-sync';
import getRandomInt from '../getRandomInt.js';
import { greeting, parting } from '../index.js';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(1, 51);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const answer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  parting();
};

export default isEven;

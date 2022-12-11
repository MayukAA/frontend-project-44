import readlineSync from 'readline-sync';
import getRandomInt from '../getRandomInt.js';
import { greeting, parting } from '../index.js';

greeting();
console.log('What is the result of the expression?');

const calc = () => {
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(1, 26);
    const secondNumber = getRandomInt(1, 26);
    const operationRandom = getRandomInt(1, 4);
    let operation;
    let answer = 0;

    if (operationRandom === 1) {
      operation = '+';
      answer = firstNumber + secondNumber;
    } else if (operationRandom === 2) {
      operation = '-';
      answer = firstNumber - secondNumber;
    } else {
      operation = '*';
      answer = firstNumber * secondNumber;
    }

    const question = `${firstNumber} ${operation} ${secondNumber}`;
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

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

export default calc;

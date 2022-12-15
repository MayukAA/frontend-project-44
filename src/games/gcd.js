import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const formDivisors = (number, array) => {
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      array.push(i);
    }
  }
};

const giveGameData = () => {
  const minNumber = 2;
  const maxNumber = 50;

  const firstNumber = getRandomInt(minNumber, maxNumber);
  const secondNumber = getRandomInt(minNumber, maxNumber);

  const divisorsFirstNumber = [];
  const divisorsSecondNumber = [];

  formDivisors(firstNumber, divisorsFirstNumber);
  formDivisors(secondNumber, divisorsSecondNumber);

  const divisors = _.intersection(divisorsFirstNumber, divisorsSecondNumber);
  const maxDivisor = _.max(divisors);

  const correctAnswer = divisors.length === 0 ? 1 : maxDivisor;
  const question = `${firstNumber} ${secondNumber}`;

  return [question, String(correctAnswer)];
};

const runGcd = () => {
  runGameCore(gameRule, giveGameData);
};

export default runGcd;

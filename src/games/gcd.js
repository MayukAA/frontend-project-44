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

  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);

  const divisorsNumber1 = [];
  const divisorsNumber2 = [];

  formDivisors(number1, divisorsNumber1);
  formDivisors(number2, divisorsNumber2);

  const divisors = _.intersection(divisorsNumber1, divisorsNumber2);
  const maxDivisor = _.max(divisors);

  const correctAnswer = divisors.length === 0 ? 1 : maxDivisor;
  const question = `${number1} ${number2}`;

  return [question, String(correctAnswer)];
};

const runGcd = () => {
  runGameCore(gameRule, giveGameData);
};

export default runGcd;

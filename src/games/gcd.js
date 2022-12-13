import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';
import gamesCore from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const makeArray = (number, array) => {
  if (number === 2) {
    array.push(number);
  }

  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      array.push(i);
    }
  }
};

const gameData = () => {
  const minNumber = 2;
  const maxNumber = 51; // not included 51

  const firstNumber = getRandomInt(minNumber, maxNumber);
  const secondNumber = getRandomInt(minNumber, maxNumber);

  const divisorFirstNumber = [];
  const divisorSecondNumber = [];

  makeArray(firstNumber, divisorFirstNumber);
  makeArray(secondNumber, divisorSecondNumber);

  const divisors = _.intersection(divisorFirstNumber, divisorSecondNumber);

  let correctAnswer;
  const lastDivisor = divisors[divisors.length - 1];

  if
  (divisorFirstNumber.length === 0 || divisorSecondNumber.length === 0 || divisors.length === 0) {
    correctAnswer = String(1);
  } else {
    correctAnswer = String(lastDivisor);
  }

  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer];
};

const gcd = () => {
  gamesCore(gameRule, gameData);
};

export default gcd;

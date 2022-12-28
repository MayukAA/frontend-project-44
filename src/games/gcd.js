import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateGameData = () => {
  const number1 = getRandomInt(2, 50);
  const number2 = getRandomInt(2, 50);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);

  return [question, String(correctAnswer)];
};

const runGcdGame = () => runGameCore(gameRule, generateGameData);

export default runGcdGame;

import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const minNumber = 1;
const maxNumber = 50;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const giveGameData = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGameCore(gameRule, giveGameData);
};

export default runEvenGame;

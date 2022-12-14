import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomInt(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => runGameCore(gameRule, generateGameData);

export default runEvenGame;

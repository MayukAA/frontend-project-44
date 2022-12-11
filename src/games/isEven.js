import getRandomInt from '../getRandomInt.js';
import gamesCore from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const minNumber = 1;
  const maxNumber = 51; // not included 51

  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

const isEven = () => {
  gamesCore(gameRule, gameData);
};

export default isEven;

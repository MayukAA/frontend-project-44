import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What number is missing in the progression?';

const formNumbersProgression = (number, length, step, array) => {
  let nextNumber = number;

  for (let i = 1; i < length; i += 1) {
    nextNumber += step;
    array.push(nextNumber);
  }
};

const generateGameData = () => {
  const firstNumber = getRandomInt(1, 20);
  const stepProgression = getRandomInt(2, 9);
  const progressionLength = getRandomInt(5, 10);
  const indexMissingNumber = getRandomInt(0, progressionLength - 1);

  const arrayProgression = [firstNumber];

  formNumbersProgression(firstNumber, progressionLength, stepProgression, arrayProgression);

  const correctAnswer = arrayProgression[indexMissingNumber];

  arrayProgression[indexMissingNumber] = '..';

  const question = arrayProgression.join(' ');

  return [question, String(correctAnswer)];
};

const runProgressionGame = () => {
  runGameCore(gameRule, generateGameData);
};

export default runProgressionGame;

import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const minFirstNumber = 1;
const maxFirstNumber = 20;
const minStepProgression = 2;
const maxStepProgression = 9;
const minProgressionLength = 5;
const maxProgressionLength = 10;
const minIndexMissingNumber = 0;

const gameRule = 'What number is missing in the progression?';

const formNumbersProgression = (number, length, step, array) => {
  let nextNumber = number;

  for (let i = 1; i < length; i += 1) {
    nextNumber += step;
    array.push(nextNumber);
  }
};

const giveGameData = () => {
  const firstNumber = getRandomInt(minFirstNumber, maxFirstNumber);
  const stepProgression = getRandomInt(minStepProgression, maxStepProgression);
  const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);
  const indexMissingNumber = getRandomInt(minIndexMissingNumber, progressionLength - 1);

  const arrayProgression = [firstNumber];

  formNumbersProgression(firstNumber, progressionLength, stepProgression, arrayProgression);

  const correctAnswer = arrayProgression[indexMissingNumber];

  arrayProgression[indexMissingNumber] = '..';

  const question = arrayProgression.join(' ');

  return [question, String(correctAnswer)];
};

const runProgressionGame = () => {
  runGameCore(gameRule, giveGameData);
};

export default runProgressionGame;

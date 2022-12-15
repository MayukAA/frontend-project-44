import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What number is missing in the progression?';

const makeArray = (firstNumber, progressionLength, stepProgression, arrayProgression) => {
  let nextNumber = firstNumber;

  for (let i = 1; i < progressionLength; i += 1) {
    nextNumber += stepProgression;
    arrayProgression.push(nextNumber);
  }
};

const giveGameData = () => {
  const minFirstNumber = 1;
  const maxFirstNumber = 20;
  const minStepProgression = 2;
  const maxStepProgression = 9;
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const minMissingNumber = 1;

  const firstNumber = getRandomInt(minFirstNumber, maxFirstNumber);
  const stepProgression = getRandomInt(minStepProgression, maxStepProgression);
  const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);
  const missingNumber = getRandomInt(minMissingNumber, progressionLength) - 1;

  const arrayProgression = [firstNumber];

  makeArray(firstNumber, progressionLength, stepProgression, arrayProgression);

  const correctAnswer = arrayProgression[missingNumber];

  arrayProgression[missingNumber] = '..';

  const question = arrayProgression.join(' ');

  return [question, String(correctAnswer)];
};

const runProgression = () => {
  runGameCore(gameRule, giveGameData);
};

export default runProgression;

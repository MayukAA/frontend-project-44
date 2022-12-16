import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What number is missing in the progression?';

<<<<<<< HEAD
const formNumbersProgression = (number, length, step, array) => {
  let nextNumber = number;

  for (let i = 1; i < length; i += 1) {
    nextNumber += step;
    array.push(nextNumber);
=======
const makeArray = (firstNumber, progressionLength, stepProgression, arrayProgression) => {
  let nextNumber = firstNumber;

  for (let i = 1; i < progressionLength; i += 1) {
    nextNumber += stepProgression;
    arrayProgression.push(nextNumber);
>>>>>>> 6ed75b821dd8264898fdac95bd4a508795ce8198
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

<<<<<<< HEAD
  formNumbersProgression(firstNumber, progressionLength, stepProgression, arrayProgression);
=======
  makeArray(firstNumber, progressionLength, stepProgression, arrayProgression);
>>>>>>> 6ed75b821dd8264898fdac95bd4a508795ce8198

  const correctAnswer = arrayProgression[missingNumber];

  arrayProgression[missingNumber] = '..';

  const question = arrayProgression.join(' ');

  return [question, String(correctAnswer)];
};

const runProgression = () => {
  runGameCore(gameRule, giveGameData);
};

export default runProgression;

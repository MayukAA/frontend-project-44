import getRandomInt from '../getRandomInt.js';
import gamesCore from '../index.js';

const gameRule = 'What number is missing in the progression?';

const gameData = () => {
  const minFirstNumber = 1;
  const maxFirstNumber = 21; // not include 21
  const minStepProgression = 2;
  const maxStepProgression = 10; // not include 10
  const minProgressionLength = 5;
  const maxProgressionLength = 11; // not include 11
  const minMissingNumber = 1;

  const firstNumber = getRandomInt(minFirstNumber, maxFirstNumber);
  const stepProgression = getRandomInt(minStepProgression, maxStepProgression);
  const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);
  const missingNumber = getRandomInt(minMissingNumber, progressionLength) - 1;

  const arrayProgression = [firstNumber];
  let nextNumber = firstNumber;

  for (let i = 1; i < progressionLength; i += 1) {
    nextNumber += stepProgression;
    arrayProgression.push(nextNumber);
  }

  const correctAnswer = String(arrayProgression[missingNumber]);

  arrayProgression[missingNumber] = '..';

  const question = arrayProgression.join(' ');

  return [question, correctAnswer];
};

const progression = () => {
  gamesCore(gameRule, gameData);
};

export default progression;

import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What number is missing in the progression?';

const generateProgression = (number, length, step) => {
  const array = [number];
  let nextNumber = number;

  for (let i = 1; i < length; i += 1) {
    nextNumber += step;
    array.push(nextNumber);
  }

  return array;
};

const generateGameData = () => {
  const firstNumber = getRandomInt(1, 20);
  const progressionStep = getRandomInt(2, 9);
  const progressionLength = getRandomInt(5, 10);
  const indexMissingNumber = getRandomInt(0, progressionLength - 1);

  const arrayProgression = generateProgression(firstNumber, progressionLength, progressionStep);

  const correctAnswer = String(arrayProgression[indexMissingNumber]);

  arrayProgression[indexMissingNumber] = '..';

  const question = arrayProgression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => runGameCore(gameRule, generateGameData);

export default runProgressionGame;

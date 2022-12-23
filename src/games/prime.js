import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const minNumber = 2;
const maxNumber = 100;

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 3) {
    return true;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const giveGameData = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGameCore(gameRule, giveGameData);
};

export default runPrimeGame;

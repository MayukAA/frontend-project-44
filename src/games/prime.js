import getRandomInt from '../getRandomInt.js';
import gamesCore from '../index.js';

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

const gameData = () => {
  const minNumber = 2;
  const maxNumber = 101; // not include 101

  const question = getRandomInt(minNumber, maxNumber);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const prime = () => {
  gamesCore(gameRule, gameData);
};

export default prime;

import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (number) => {
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
  const minNumber = 2;
  const maxNumber = 100;

  const question = getRandomInt(minNumber, maxNumber);
<<<<<<< HEAD
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
=======
  const correctAnswer = checkPrime(question) ? 'yes' : 'no';
>>>>>>> 6ed75b821dd8264898fdac95bd4a508795ce8198

  return [question, correctAnswer];
};

const runPrime = () => {
  runGameCore(gameRule, giveGameData);
};

export default runPrime;

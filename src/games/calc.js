import getRandomInt from '../getRandomInt.js';
import gamesCore from '../index.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const minNumber = 1;
  const maxNumber = 26; // not included 26
  const maxOperationRandom = 4; // not included 4

  const firstNumber = getRandomInt(minNumber, maxNumber);
  const secondNumber = getRandomInt(minNumber, maxNumber);
  const operationRandom = getRandomInt(minNumber, maxOperationRandom);
  let operation;
  let correctAnswer = 0;

  if (operationRandom === 1) {
    operation = '+';
    correctAnswer = String(firstNumber + secondNumber);
  } else if (operationRandom === 2) {
    operation = '-';
    correctAnswer = String(firstNumber - secondNumber);
  } else {
    operation = '*';
    correctAnswer = String(firstNumber * secondNumber);
  }

  const question = `${firstNumber} ${operation} ${secondNumber}`;

  return [question, correctAnswer];
};

const calc = () => {
  gamesCore(gameRule, gameData);
};

export default calc;

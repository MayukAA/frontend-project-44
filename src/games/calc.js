import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What is the result of the expression?';

const giveGameData = () => {
  const minNumber = 1;
  const maxNumber = 25;
  const maxOperationRandom = 3;

  const firstNumber = getRandomInt(minNumber, maxNumber);
  const secondNumber = getRandomInt(minNumber, maxNumber);
  const operationRandom = getRandomInt(minNumber, maxOperationRandom);
  let operation;
  let correctAnswer = 0;

  switch (operationRandom) {
    case 1:
      operation = '+';
      correctAnswer = firstNumber + secondNumber;
      break;
    case 2:
      operation = '-';
      correctAnswer = firstNumber - secondNumber;
      break;
    default:
      operation = '*';
      correctAnswer = firstNumber * secondNumber;
  }

  const question = `${firstNumber} ${operation} ${secondNumber}`;

  return [question, String(correctAnswer)];
};

const calc = () => {
  runGameCore(gameRule, giveGameData);
};

export default calc;

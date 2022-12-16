import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What is the result of the expression?';

const giveGameData = () => {
  const minNumber = 1;
  const maxNumber = 25;
  const maxOperationRandom = 3;

  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const operationRandom = getRandomInt(minNumber, maxOperationRandom);
  let operation;
  let correctAnswer = 0;

  switch (operationRandom) {
    case 1:
      operation = '+';
      correctAnswer = number1 + number2;
      break;
    case 2:
      operation = '-';
      correctAnswer = number1 - number2;
      break;
    default:
      operation = '*';
      correctAnswer = number1 * number2;
  }

  const question = `${number1} ${operation} ${number2}`;

  return [question, String(correctAnswer)];
};

const calc = () => {
  runGameCore(gameRule, giveGameData);
};

export default calc;

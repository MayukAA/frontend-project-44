import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculateAnswer = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return operand1 * operand2;
  }
};

const giveGameData = () => {
  const minNumber = 1;
  const maxNumber = 25;
  const operators = ['+', '-', '*'];

  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const operator = _.sample(operators);

  const correctAnswer = calculateAnswer(number1, number2, operator);
  const question = `${number1} ${operator} ${number2}`;

  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  runGameCore(gameRule, giveGameData);
};

export default runCalcGame;

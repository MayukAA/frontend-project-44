import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';
import runGameCore from '../index.js';

const operators = ['+', '-', '*'];

const gameRule = 'What is the result of the expression?';

const calculateAnswer = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Operator ${operator} - is invalid`);
  }
};

const generateGameData = () => {
  const number1 = getRandomInt(1, 25);
  const number2 = getRandomInt(1, 25);
  const operator = _.sample(operators);

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculateAnswer(number1, number2, operator);

  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  runGameCore(gameRule, generateGameData);
};

export default runCalcGame;

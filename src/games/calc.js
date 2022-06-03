import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[generateRandomNumber(0, 2)];

const calculateResultOperation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unsupported operator - ${operator}`);
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 30);
  const number2 = generateRandomNumber(0, 30);
  const operator = getRandomOperator();
  const answer = String(calculateResultOperation(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomOperator(0, 2)];

const calculateResultOperation = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${symbol}'!`);
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const operator = getRandomOperator();
  const answer = String(calculateResultOperation(number1, number2, getRandomOperator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

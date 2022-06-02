import randomNumber from '../randomNumber.js';
import logic from '../logicGames.js';

const condition = 'What is the result of the expression?';

const result = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: return 'error';
  }
};

const taskResponse = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[Math.floor(Math.random() * 3)];
  const answer = String(result(number1, number2, getRandomOperator));
  const question = `${number1} ${getRandomOperator} ${number2}`;
  return [question, answer];
};

const startGame = () => logic(condition, taskResponse);

export default startGame;

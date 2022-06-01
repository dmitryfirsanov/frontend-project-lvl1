import randomNumber from '../randomNumber.js';
import logic from '../logicGames.js';

const condition = 'Find the greatest common divisor of given numbers.';

const NOD = (number1, number2) => {
  if (number2 > number1) return NOD(number2, number1);
  if (!number2) return number1;
  return NOD(number2, number1 % number2);
};

const taskResponse = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const answer = String(NOD(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};

const runGcdGame = () => logic(condition, taskResponse);

export default runGcdGame;

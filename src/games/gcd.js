import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 > number1) return getGcd(number2, number1);
  if (!number2) return number1;
  return getGcd(number2, number1 % number2);
};

const generateRound = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const answer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

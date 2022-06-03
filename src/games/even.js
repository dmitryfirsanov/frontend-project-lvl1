import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(0, 100);

  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

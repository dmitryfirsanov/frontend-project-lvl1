import randomNumber from '../randomNumber.js';
import logic from '../logicGames.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const taskResponse = () => {
  const number = randomNumber();
  const even = number % 2 === 0;

  const answer = even ? 'yes' : 'no';

  return [number, answer];
};

const startGame = () => logic(condition, taskResponse);

export default startGame;

import randomNumber from '../randomNumber.js';
import logic from '../logicGames.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  let answer = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) answer = false;
  }
  return answer;
};

const taskResponse = () => {
  const number = randomNumber();
  const question = String(number);
  const answer = (isPrime(number)) === true ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => logic(condition, taskResponse);

export default startGame;

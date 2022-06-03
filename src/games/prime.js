import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  let answer = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) answer = false;
  }
  return answer;
};

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = String(number);
  const answer = (isPrime(number)) === true ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

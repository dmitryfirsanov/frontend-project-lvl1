import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'What number is missing in the progression?';

let number = generateRandomNumber(0, 25);
const randomPosition = generateRandomNumber(0, 9);
const maxCountNumbers = 10;

const generateRound = () => {
  const progressionNumber = generateRandomNumber(1, 5);
  let count = 0;
  let question = '';
  let answer;
  while (count < maxCountNumbers) {
    if (count === randomPosition) {
      question += '.. ';
      answer = String(number);
    } else question += `${number} `;
    count += 1;
    number += progressionNumber;
  }
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

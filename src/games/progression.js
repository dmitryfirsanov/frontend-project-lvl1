import logic from '../logicGames.js';

const condition = 'What number is missing in the progression?';

let number = Math.floor(Math.random() * 21);
const progressionNumber = Math.floor(Math.random() * 5) + 1;
const randomPosition = Math.floor(Math.random() * 10);

const taskResponse = () => {
  let count = 0;
  let question = '';
  let answer;
  while (count < 10) {
    if (count === randomPosition) {
      question += '.. ';
      answer = String(number);
    } else question += `${number} `;
    count += 1;
    number += progressionNumber;
  }
  return [question, answer];
};

const startGame = () => logic(condition, taskResponse);

export default startGame;

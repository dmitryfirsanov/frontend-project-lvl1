import generateRandomNumber from '../utils.js';
import start from '../logicGames.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const progressionStartNumber = generateRandomNumber(0, 25);
  const progressionStep = generateRandomNumber(1, 5);
  const progression = getProgression(progressionStartNumber, progressionLength, progressionStep);
  const randomPosition = generateRandomNumber(0, progressionLength - 1);
  const answer = String(progression[randomPosition]);
  progression.splice(randomPosition, 1, '..');
  const question = progression.join(' ');
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;

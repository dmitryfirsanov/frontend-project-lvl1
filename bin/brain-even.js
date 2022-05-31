#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const correctAnswer = () => {
  let Answer;
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    if (number % 2 === 0) Answer = 'yes';
    else Answer = 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== Answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${Answer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

correctAnswer();

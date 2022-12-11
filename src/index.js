import readlineSync from 'readline-sync';
// import getRandomInt from './getRandomInt.js';

let userName;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// const gameReaction = (userAnswer, answer) => {
//   if (userAnswer === answer) {
//     console.log('Correct!');
//   } else {
//     console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
//     console.log(`Let's try again, ${userName}!`);
//     return;
//   }
// };

const gamesCore = (question, answer) => {
  for (let i = 0; i < 3; i += 1) {
    // const question = getRandomInt(1, 51);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // const answer = question % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const parting = () => {
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, parting };

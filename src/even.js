import gamelogic from './index.js';

const gameCondition = () => {
  const randomNumber = Math.floor(Math.random() * 50 + 1);
  let askQuestion = `${randomNumber}`;
  let correctAnswer = 0;
  if (randomNumber % 2 === 0) {
    askQuestion = `${randomNumber}`;
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [askQuestion, correctAnswer];
};

export default () => {
  gamelogic('Answer "yes" if the number is even, otherwise answer "no".', gameCondition);
};

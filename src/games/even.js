import gamelogic from '../index.js';
import getRandomNumber from '../utils.js';

const gameCondition = () => {
  const randomNumber = getRandomNumber(1, 50);
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

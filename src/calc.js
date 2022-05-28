import gamelogic from './index.js';
import getRandomNumber from './utils.js';

const gameCondition = () => {
  const a = getRandomNumber(1, 25);
  const b = getRandomNumber(1, 25);
  let askQuestion = '';
  let correctAnswer = 0;
  const randomSign = getRandomNumber(1, 3);
  if (randomSign === 1) {
    askQuestion = `${a} + ${b}`;
    correctAnswer = a + b;
  }
  if (randomSign === 2) {
    askQuestion = `${a} - ${b}`;
    correctAnswer = a - b;
  }
  if (randomSign === 3) {
    askQuestion = `${a} * ${b}`;
    correctAnswer = a * b;
  }
  return [askQuestion, String(correctAnswer)];
};

export default () => {
  gamelogic('What is the result of the expression?', gameCondition);
};

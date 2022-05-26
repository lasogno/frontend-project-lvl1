import gamelogic from './index.js';

const gameCondition = () => {
  const a = Math.floor(Math.random() * 50 + 1);
  const b = Math.floor(Math.random() * 50 + 1);
  let askQuestion = '';
  let correctAnswer = 0;
  const randomSign = Math.floor(Math.random() * 3 + 1);
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

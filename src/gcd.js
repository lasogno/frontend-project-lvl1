import _ from 'lodash';
import gamelogic from './index.js';
import getRandomNumber from './utils.js';

const gameCondition = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);
  const askQuestion = `${a} ${b}`;
  let correctAnswer = 0;
  const arrayA = [];
  const arrayB = [];
  for (let i = 0; i <= a; i += 1) {
    if (a % i === 0) {
      arrayA.push(i);
    }
  }
  for (let i = 0; i <= a; i += 1) {
    if (b % i === 0) {
      arrayB.push(i);
    }
  }
  const arrAB = _.intersection(arrayA, arrayB);
  correctAnswer = arrAB.pop();
  return [askQuestion, String(correctAnswer)];
};

export default () => {
  gamelogic('Find the greatest common divisor of given numbers.', gameCondition);
};

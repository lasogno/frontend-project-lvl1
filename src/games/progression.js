import gamelogic from '../index.js';
import getRandomNumber from '../utils.js';

const gameCondition = () => {
  const begin = getRandomNumber(1, 15);
  const step = getRandomNumber(1, 6);
  const progressionArray = [];
  let correctAnswer = 0;
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(begin + i * step);
  }
  const missingNumIndex = getRandomNumber(0, 9);
  correctAnswer = progressionArray[missingNumIndex];
  progressionArray[missingNumIndex] = '..';
  const progressionString = progressionArray.join(' ');

  return [progressionString, String(correctAnswer)];
};

export default () => {
  gamelogic('What number is missing in the progression?', gameCondition);
};

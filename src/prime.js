import gamelogic from './index.js';
import getRandomNumber from './utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i ** 2 <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCondition = () => {
  const number = getRandomNumber(1, 100);
  let correctAnswer = '';
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [number, correctAnswer];
};

export default () => gamelogic('Answer "yes" if given number is prime. Otherwise answer "no".', gameCondition);

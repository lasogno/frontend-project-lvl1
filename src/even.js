import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  while (counter < 3) {
    const num = Math.floor(Math.random() * 50 - 1 + 1 + 1);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (num % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (num % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};

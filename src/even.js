import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let counter = 0;
  while (counter < 3) {
    const num = Math.floor(Math.random() * 50 + 1);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correct = num % 2 === 0 ? 'yes' : 'no';
    if (answer === correct) {
      console.log('Correct!');
      counter += 1;
    } else if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};

import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

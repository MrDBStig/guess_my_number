'use strict';

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highscore = 0;

// Selectors
const message = document.querySelector('.message'),
  check = document.querySelector('.check'),
  body = document.querySelector('body'),
  elHighscore = document.querySelector('.highscore'),
  elNumber = document.querySelector('.number'),
  elScore = document.querySelector('.score');

// Functions
const displayTextContent = function (element, text) {
  element.textContent = text;
};

// Game functionality
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there isn't any input value
  if (!guess) {
    displayTextContent(message, '⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayTextContent(message, '🎉 Correct Number!');
    body.style.backgroundColor = '#60b347';
    elNumber.style.width = '30rem';
    displayTextContent(elNumber, secretNumber);

    // Highscore section
    if (score > highscore) {
      highscore = score;
      displayTextContent(elHighscore, highscore);
    }
  } // When guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayTextContent(
        message,
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayTextContent(elScore, score);
    } else {
      displayTextContent(message, '💥 You lost the game!');
      displayTextContent(elScore, 0);
      body.style.backgroundColor = '#B3474B';
    }
  }
});

// Reset after clicking "Again!"
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayTextContent(elNumber, '?');
  elNumber.style.width = '15rem';
  displayTextContent(elScore, score);
  displayTextContent(message, 'Start guessing...');
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
});

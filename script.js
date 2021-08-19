"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
// function for displaying message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".checkBtn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputNum").value);
  // when there is no input
  if (!guess) {
    message.textContent = "⛔ No number!";
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".hiddenNum").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".hiddenNum").style.width = "250px";
    document.querySelector(".inputNum").style.backgroundColor = "#60b347";

    // setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore").textContent = score;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "🧨 You lost";
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "📈 Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     message.textContent = "🧨 You lost";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // when input is lower than guess
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "📉 Too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     message.textContent = "🧨 You lost";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
// Resetting game
document.querySelector(".reloadGame").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".hiddenNum").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#393b44";
  document.querySelector(".hiddenNum").style.width = "140px";
  document.querySelector(".inputNum").style.backgroundColor = "#393b44";
  document.querySelector(".inputNum").value = "";
  document.querySelector(".score").textContent = score;
});

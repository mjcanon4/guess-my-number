"use strict";

//Here we are creating the secret number
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = score;

// Resetting the game via the Again button
document.querySelector(".again").addEventListener("click", function () {
  console.log("object");
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

// Listening for a click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //If there is no guess but check has been clicked, a message appears
  if (!guess) {
    document.querySelector(".message").textContent =
      "I need a number to check...";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Congrats! 🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;

    if (score > highScore) {
      document.querySelector(".highScore").textContent = score;
    } else {
      document.querySelector(".highScore").textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⏬ Too high...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Dont visit a casino 😅";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⏫ Too low...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Dont visit a casino 😅";
      document.querySelector(".score").textContent = 0;
    }
  }
});

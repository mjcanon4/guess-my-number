"use strict";

//Here we are creating the secret number
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

// Listening for a click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //If there is no guess but check has been clicked, a message appears
  if (!guess) {
    document.querySelector(".message").textContent =
      "I need a number to check...";
  }
});

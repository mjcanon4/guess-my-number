"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //If there is no guess but check has been clicked, a message appears
  if (!guess) {
    document.querySelector(".message").textContent =
      "I need a number to check...";
  }
});

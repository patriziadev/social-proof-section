"use strict";

const rates = document.getElementById("rates");
const rateElement = document.querySelectorAll(".comment");

// set the margin at rate elements //
const numberOfChildren = rateElement.length;
const offset = 3;

for (let i = 0; i < numberOfChildren; i++) {
  rateElement[i].style.margin = `1em ${(numberOfChildren - i) * offset}em 1em ${
    i * offset
  }em`;
}

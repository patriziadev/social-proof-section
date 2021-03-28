"use strict";

const rates = document.getElementById("rates");
const rateElement = document.querySelectorAll(".rate");
const card = document.querySelectorAll(".card");

const animationDelay = 0.5;
const ratesOffset = 3;
const cardOffset = 1;
const mobileMaxWidth = 992;

// set the margin and the animation delay at rate elements //
const numberOfRates = rateElement.length;

if (window.innerWidth > mobileMaxWidth) {
  for (let i = 0; i < numberOfRates; i++) {
    rateElement[i].style.margin = `1em ${
      (numberOfRates - i) * ratesOffset
    }em 1em ${i * ratesOffset}em`;

    rateElement[i].style.animationDelay = `${animationDelay * i}s`;
  }
}

// set the margin and the anmation delaty at the card
const numberOfCards = card.length;

if (window.innerWidth > mobileMaxWidth) {
  for (let i = 0; i < numberOfCards; i++) {
    card[i].style.margin = ` ${i * cardOffset}em 0 ${
      numberOfCards - i * cardOffset
    }em 0`;

    card[i].style.animationDelay = `${
      animationDelay * i + animationDelay * numberOfRates
    }s`;
  }
}

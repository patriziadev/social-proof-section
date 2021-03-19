// set the margin at rate elements //

const rates = document.getElementById("rates");
const numberOfChildren = rates.children.length;
const offset = 3;
console.log(rates.children[1]);
for (let i = 0; i < numberOfChildren; i++) {
  rates.children[i].style.margin =
    "1em " + (numberOfChildren - i) * offset + "em 1em " + i * offset + "em";
}

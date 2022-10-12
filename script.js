"use strict";

// selectors
// const totalParagraph = document.querySelector(".total");
// const colaButton = document.querySelector(".cola");
// const peanutsButton = document.querySelector(".peanuts");
// const chocolateButton = document.querySelector(".chocolate");
// const gummiesButton = document.querySelector(".gummies");
// let total = 0;
const coinForm = document.querySelector(".money-form");
const coinContainer = document.querySelector(".coin-container");
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const lightBulb = document.querySelector(".light-bulb");
const lightButtons = document.querySelectorAll(".light-switch");

const updateVendingTotal = (price) => {
  total += price;
  totalParagraph.textContent = `Total: $${total}.00`;
};

// colaButton.addEventListener("click", () => {
//   updateVendingTotal(2)
// };

// peanutsButton.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `Total: $${total}`;
// });

// chocolateButton.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `Total: $${total}`;
// });

// gummiesButton.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `Total: $${total}`;
// });

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // grab data from user input, check in console
  const inputHowMany = document.querySelector("#howMany").value;
  const selectCoin = document.querySelector("#coin").value;
  console.dir(inputHowMany);
  console.dir(selectCoin);
  for (let i = 0; i < inputHowMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add(selectCoin, "coin");
    newCoin.textContent = selectCoin;
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    coinContainer.append(newCoin);
  }
});

onButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
  lightBulb.style.color = "black";
});

offButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "rgb(70, 70, 70)";
  lightBulb.style.color = "white";
});

toggleButton.addEventListener("click", () => {
  if (lightBulb.style.backgroundColor === "yellow") {
    lightBulb.style.backgroundColor = "rgb(70,70,70)";
    lightBulb.style.color = "white";
  } else {
    lightBulb.style.backgroundColor = "yellow";
    lightBulb.style.color = "black";
  }
});

endButton.addEventListener("click", () => {
  lightBulb.remove();
  lightButtons.forEach((button) => {
    button.setAttribute("disabled", true);
  });
});

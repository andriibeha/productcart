function quantityCounter() {
  let buttonPlus = document.querySelector("#style__quantity__button__plus");
  let buttonMinus = document.querySelector("#style__quantity__button__minus");
  let counter = document.querySelector("#style__quantity__text");

  let quantity = 1;

  buttonMinus.addEventListener("click", () => {
    quantity += 1;
    counter.textContent = quantity;
  });

  buttonPlus.addEventListener("click", () => {
    if (quantity === 0) {
      return;
    } else {
      quantity -= 1;
      counter.textContent = quantity;
    }
  });
}
quantityCounter();

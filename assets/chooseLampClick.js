function chooseLampClick() {
  let button = document.querySelectorAll(".style__button-button");
  let buttonActiveDefault = document.querySelector(
    ".style__button-button[data-lamp='photo']"
  );

  let prevState = buttonActiveDefault;

  button.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.className === "style__button-button") {
        prevState.classList.remove("style__button-button--active");
        prevState = el;
        el.classList.add("style__button-button--active");
      }
    });
  });
}

chooseLampClick();

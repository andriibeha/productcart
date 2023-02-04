function descriptionOptions() {
  let descriptionText1 = document.querySelector("#style__description1");
  let descriptionText2 = document.querySelector("#style__description2");
  let list1 = document.querySelector("#style__radio1");
  let list2 = document.querySelector("#style__radio2");

  list1.addEventListener("click", (e) => {
    if (e.target.id === "style__description1__input__yes") {
      descriptionText1.textContent = "Yes";
    } else if (e.target.id === "style__description1__input__no") {
      descriptionText1.textContent = "No";
    }
  });

  list2.addEventListener("click", (e) => {
    if (e.target.id === "style__description2__input__yes") {
      descriptionText2.textContent = "Yes";
    } else if (e.target.id === "style__description2__input__no") {
      descriptionText2.textContent = "No";
    }
  });
}
descriptionOptions();

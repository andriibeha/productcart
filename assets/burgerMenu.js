function burgerMenu() {
  let menu = document.querySelector(".burger__menu");
  let button = document.querySelector(".burger__menu__button");
  let links = document.querySelector(".burger__menu__link");
  let burgerMenuNav = document.querySelector(".burger__menu__nav");
  const defaultOffset = 34;
  /*   let overlay = document.querySelector(".burger__menu__overlay"); */

  const scrollPosittion = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.addEventListener("click", () => {
    toggleMenu();
  });

  /*   overlay.addEventListener("click", () => {
    toggleMenu();
  }); */

  function toggleMenu() {
    menu.classList.toggle("burger__menu__active");

    if (menu.classList.contains("burger__menu__active")) {
      /* document.body.style.overflow = "hidden"; */ // If you want to acrive croll
      if (scrollPosittion() > defaultOffset) {
        burgerMenuNav.classList.add("burger__menu__nav__top");
      }
      if (scrollPosittion() < defaultOffset) {
        burgerMenuNav.classList.remove("burger__menu__nav__top");
      }
    }
    /* 
    else {
      document.body.style.overflow = "visible"; // If you want to stop scroll
    } */
  }
}

burgerMenu();

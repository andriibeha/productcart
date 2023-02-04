function headerHide() {
  let header = document.querySelector(".header");
  let lastScroll = 0;
  const defaultOffset = 34;

  const scrollPosittion = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  const containHide = () => {
    return header.classList.contains("header__hide");
  };

  let containsTest = () => {
    return header.classList.contains("header__top--zero");
  };

  window.addEventListener("scroll", () => {
    if (scrollPosittion() > lastScroll && !containHide()) {
      header.classList.add("header__hide");
    } else if (scrollPosittion() < lastScroll && containHide()) {
      header.classList.remove("header__hide");
    }

    if (scrollPosittion() > defaultOffset && !containsTest()) {
      header.classList.add("header__top--zero");
    } else if (scrollPosittion() < defaultOffset && containsTest()) {
      header.classList.remove("header__top--zero");
    }

    lastScroll = scrollPosittion();
  });
}

headerHide();

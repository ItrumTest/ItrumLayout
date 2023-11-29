// burger animation listener
let lastKnownScrollPosition = 0;
let ticking = false;

document.querySelector(".burger").addEventListener("click", function () {
  document
    .getElementById("burger__navigation__tablet")
    .classList.toggle("burger__navigation__active");
  document.getElementById("burger").classList.add("burger__scroll");

  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");

  if ([...this.classList].includes("active")) {
    document
      .getElementById("desktop_image")
      .classList.add("about__container__call__tablet__decoration");

    document
      .getElementById("header__image")
      .classList.add("header__navigation__logo__tablet__onScroll");
    //auth font weight
    document
      .querySelector(".header__contact")
      .classList.toggle("header__contact__light");
    document
      .getElementById("header")
      .classList.add("header__background__scroll");
    if (window.screen.width <= 768) {
      document.getElementById("header").classList.remove("header__background");
    }
    return;
  }

  document.getElementById("desktop_image").removeAttribute("class");
  if (!ticking && window.screen.width <= 320) {
    document
      .getElementById("desktop_image")
      .setAttribute("class", "header__navigation__logo__desktop ");
    document.getElementById("header").classList.remove("header__background");
  }
  document.getElementById("header__image").removeAttribute("class");
  document
    .getElementById("header__image")
    .setAttribute("class", "header__navigation__logo__tablet");
  document
    .getElementById("header__image")
    .classList.add("header__navigation__logo__desktop");
  document
    .getElementById("header")
    .classList.replace("header__background__scroll", "header__background");
  //auth font weight
  document
    .querySelector(".header__contact")
    .classList.toggle("header__contact__light");
  if (lastKnownScrollPosition) {
    //replace image source
    document
      .getElementById("desktop_image")
      .classList.add("about__container__call__tablet__decoration");
    document
      .getElementById("header__image")
      .classList.add("header__navigation__logo__tablet__onScroll");
    // change bg color
    document
      .getElementById("header")
      .classList.replace("header__background", "header__background__scroll");
    return;
  }
});

// burger scroll change styles on header
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

function doSomething(scrollPos) {
  // Do something with the scroll position

  const header_position_fixed = document.getElementById("header");
  const promo = document.getElementById("promo");
  const header_image = document.getElementById("header__image");
  const desktop_image = document.getElementById("desktop_image");
  const burger = document.getElementById("burger");
  // const navigationText = document.querySelectorAll("nav")

  // promo.classList.toggle("promo__container__fixed")
  if (scrollPos) {
    header_position_fixed.setAttribute(
      "class",
      "header header__background__scroll about__header"
    );
    if (window.screen.width <= 768) {
      header_position_fixed.setAttribute(
        "class",
        "header header__background__scroll"
      );
    }
    promo.classList.add("promo__container__fixed")
    //burger before and after elements color
    burger.classList.add("burger__scroll");
    header_image.setAttribute(
      "class",
      "header__navigation__logo__tablet__onScroll"
    );
    // navigationText.classList.add("nav__scroll")
    desktop_image.setAttribute(
      "class",
      "about__container__call__tablet__decoration"
    );

    return;
  }
  // promo.classList.toggle("promo__container__fixed")
  promo.classList.remove("promo__container__fixed")
  header_image.setAttribute("class", "header__navigation__logo__tablet");
  desktop_image.setAttribute("class", "header__navigation__logo__desktop");

  if ([...burger.classList].includes("active")) {
    header_image.setAttribute(
      "class",
      "header__navigation__logo__tablet__onScroll"
    );
    desktop_image.setAttribute(
      "class",
      "about__container__call__tablet__decoration"
    );
    return;
  }

  header_position_fixed.setAttribute("class", "header header__background");
  return;
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  window.requestAnimationFrame(() => {
    doSomething(lastKnownScrollPosition);
  });
});

function burgerScrollTo(value) {
  document
    .getElementById("burger__navigation__tablet")
    .classList.toggle("burger__navigation__active");
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");

  scrollTo1(value);
}

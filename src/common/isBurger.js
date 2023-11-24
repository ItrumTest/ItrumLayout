// burger animation listener
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

// burger scroll change styles on header
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position

  const header_position_fixed = document.getElementById("header");
  const header_image = document.getElementById("header__image");
  const desktop_image = document.getElementById("desktop_image");
  const burger = document.getElementById("burger");

  if (scrollPos) {
    // header_position_fixed.setAttribute("class", "header__scroll");
    header_position_fixed.setAttribute("class", "header header__background__scroll");
    burger.removeAttribute("class");
    // header_position_fixed.removeAttribute("class");
    // header_position_fixed.setAttribute("class", "header tablet__header");
    burger.setAttribute("class", "burger__scroll");
    // header_position_fixed.setAttribute("class","header__scroll__color")
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

  burger.removeAttribute("class");
  burger.setAttribute("class", "burger");
  header_image.removeAttribute("class");
  desktop_image.removeAttribute("class");
  header_position_fixed.setAttribute("class", "header header__background");
  // header_position_fixed.removeAttribute("class");
  // header_position_fixed.setAttribute("class", "header");

  header_image.setAttribute("class", "header__navigation__logo__tablet");
  desktop_image.setAttribute("class", "header__navigation__logo__desktop");
  return;
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking && window.screen.width <= 780) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


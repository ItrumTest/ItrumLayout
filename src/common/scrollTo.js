function scrollTo1(value) {
  console.log("clicked to", value);
  window.scrollTo(0, value);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
  console.log(1)
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
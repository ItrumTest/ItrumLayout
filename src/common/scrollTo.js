// navigation scroll (menu bar)
function scrollTo1(value) {
  console.log("clicked to", value);
  if (!ticking && window.screen.width <= 320) {
    switch (value + "") {
      case "1060":
        window.scrollTo(0, 970);
        break;
      case "1820":
        window.scrollTo(0, 1350);
        break;
      case "2900":
        window.scrollTo(0, 2330);
        break;
      default:
        console.log("some undefined value");
        break;
    }
    return;
  }

  window.scrollTo(0, value);
}

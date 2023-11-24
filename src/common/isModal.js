function isModal(value) {
  const element = document.getElementById("modalContainer");
  if (value) {
    const oldClass = element.getAttribute("class");
    element.setAttribute("class", `${oldClass + " active__modal"}`);
    return;
  }
  element.removeAttribute("class");
  element.setAttribute("class", "business__modal__wrapper");
  return;
}
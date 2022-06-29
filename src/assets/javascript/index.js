const toggle = (id) => {
  var elem = document.querySelector(id);
  elem.style.display == "block"
    ? (elem.style.display = "none")
    : (elem.style.display = "block");
};

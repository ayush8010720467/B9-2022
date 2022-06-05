function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("whiteTheme")) {
    body.classList.remove("whiteTheme");
    body.classList.add("greenTheme");
  } else {
    body.classList.add("whiteTheme");
    body.classList.remove("greenTheme");
  }
}

var count = 0;
function incr() {
  let span = document.querySelector("div span");
  count++;
  span.innerText = count;
}
function decr() {
  let span = document.querySelector("div span");
  count--;
  span.innerText = count;
}

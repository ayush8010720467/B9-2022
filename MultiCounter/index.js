function createElem(tag, className, innerText = "") {
  let elem = document.createElement(tag);
  elem.setAttribute("class", className);
  elem.innerText = innerText;
  return elem;
}
function genCounter() {
  let workableArea = document.getElementById("workableArea");
  return () => {
    let count = 0;
    let counter = createElem("div", "counter");
    let minusBtn = createElem("button", "minusBtn btn", "-");
    let counterValue = createElem("span", "count", count);
    let addBtn = createElem("button", "addBtn btn", "+");
    minusBtn.addEventListener("click", () => {
      count--;
      counterValue.innerText = count;
    });
    addBtn.addEventListener("click", () => {
      count++;
      counterValue.innerText = count;
    });
    counter.append(minusBtn, counterValue, addBtn);
    workableArea.append(counter);
  };
}
let genCounterCaller = genCounter();

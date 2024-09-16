let countEl = document.getElementById("increment");

function increment() {
  let count = parseInt(countEl.textContent);
  count += 1;
  countEl.textContent = count;
}
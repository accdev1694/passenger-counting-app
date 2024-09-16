let countEl = document.getElementById("increment");

function increment() {
  let count = parseInt(countEl.textContent);
  count += 1;
  countEl.textContent = count;
}

let currentCount = document.getElementById("save");
function save() {
  let current = currentCount.textContent;
  let previous = countEl.textContent;
  current += previous + " || ";
  currentCount.textContent = current;
  countEl.textContent = 0;
}

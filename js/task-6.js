function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

createBtn.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

function createBoxes(amount) {
  boxEl.innerHTML = '';
  let size = 30;
  const divs = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    divs.push(div);
    size += 10;
  }
  boxEl.append(...divs);
  inputEl.value = '';
}

const destroyBoxes = () => {
  boxEl.remove();
}

destroyBtn.addEventListener('click', destroyBoxes);

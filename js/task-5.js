function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const colorBody = document.querySelector('body');
const colorSpan = document.querySelector('.color');

const onBtnClick = () => {
colorBody.style.backgroundColor = getRandomHexColor();

colorSpan.textContent = colorBody.style.backgroundColor;
}

btnEl.addEventListener('click', onBtnClick);

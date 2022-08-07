function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorStyle = document.querySelector('span.color');

changeButton.addEventListener('click', elem => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorStyle.textContent = color;

})
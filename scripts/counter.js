const countElem = document.querySelector('.js-count');
const increaseElem = document.querySelector('.js-increase');
const decreaseElem = document.querySelector('.js-decrease');
const btns = document.querySelectorAll('.btns');

let count = localStorage.getItem('savedCount') || 0;
countElem.textContent = count;
countElem.style.color = localStorage.getItem('savedColor');

increaseElem.addEventListener('click', () => {
  count++;
  checkColor();
  saveColor();
  updateCount();
  saveCount();
})

decreaseElem.addEventListener('click', () => {
  count--;
  checkColor();
  saveColor();
  updateCount();
  saveCount();
})

function updateCount() {
  countElem.textContent = count;
}

function saveCount() {
  localStorage.setItem('savedCount', count);
}

function checkColor() {
  if (count > 0) {
    countElem.style.color = '#00B31E';
  } else if (count < 0) {
    countElem.style.color = '#B00000';
  } else if (count === 0) {
    countElem.style.color = '#8B8B8B';
  }
}

function saveColor() {
  localStorage.setItem('savedColor', countElem.style.color);
}
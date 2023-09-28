let count = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.innerHTML = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counterValue.innerHTML = count;
});
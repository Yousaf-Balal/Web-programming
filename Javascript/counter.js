let count = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.innerHTML = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counterValue.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.innerHTML = count;
})

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Load saved value from localStorage
let count = localStorage.getItem("count");

if (count === null) {
    count = 0;
} else {
    count = parseInt(count);
}

countDisplay.textContent = count;

increaseBtn.addEventListener("click", function () {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;
    localStorage.setItem("count", count);
}
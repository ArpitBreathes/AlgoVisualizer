let array = [];

const generateBtn = document.getElementById("generate");
const sizeSlider  = document.getElementById("size");
const speedSlider = document.getElementById("speed");

function generateArray() {
  array = [];
  const size = parseInt(sizeSlider.value);
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 380) + 20);
  }
  renderBars(array);
  resetStats();
  setAlgoInfo("—", "—", "—", "—");
  document.querySelectorAll(".btn-algo").forEach(b => b.classList.remove("active"));
}

generateBtn.addEventListener("click", generateArray);

sizeSlider.addEventListener("input", () => {
  document.getElementById("size-val").textContent = sizeSlider.value;
  generateArray();
});

speedSlider.addEventListener("input", () => {
  document.getElementById("speed-val").textContent = speedSlider.value;
});

// Initialize
generateArray();

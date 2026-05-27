function renderBars(array) {
  const container = document.getElementById("array-container");
  container.innerHTML = "";
  const containerWidth = container.clientWidth || 900;
  const barWidth = Math.max(2, Math.floor((containerWidth - array.length * 2) / array.length));

  for (let value of array) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    bar.style.width = `${barWidth}px`;
    container.appendChild(bar);
  }
}

function disableControls() {
  document.querySelectorAll(".btn-algo, #generate").forEach(b => b.disabled = true);
  document.getElementById("size").disabled = true;
  document.getElementById("status-text").textContent = "RUNNING";
  document.getElementById("status-text").style.color = "#ff3d5a";
}

function enableControls() {
  document.querySelectorAll(".btn-algo, #generate").forEach(b => b.disabled = false);
  document.getElementById("size").disabled = false;
  document.getElementById("status-text").textContent = "DONE";
  document.getElementById("status-text").style.color = "#00ff88";
  document.querySelectorAll(".btn-algo").forEach(b => b.classList.remove("active"));
}

function resetStats() {
  document.getElementById("comparisons").textContent = "0";
  document.getElementById("swaps").textContent = "0";
  document.getElementById("status-text").textContent = "IDLE";
  document.getElementById("status-text").style.color = "";
}

let _comparisons = 0;
let _swaps = 0;

function incComparisons() {
  _comparisons++;
  document.getElementById("comparisons").textContent = _comparisons;
}

function incSwaps() {
  _swaps++;
  document.getElementById("swaps").textContent = _swaps;
}

function initStats() {
  _comparisons = 0;
  _swaps = 0;
  document.getElementById("comparisons").textContent = "0";
  document.getElementById("swaps").textContent = "0";
}

function setAlgoInfo(name, time, space, stable) {
  document.getElementById("algo-name").textContent = name;
  document.getElementById("algo-time").textContent = `Time: ${time}`;
  document.getElementById("algo-space").textContent = `Space: ${space}`;
  document.getElementById("algo-stable").textContent = `Stable: ${stable}`;
}

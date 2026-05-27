document.getElementById("bubble").addEventListener("click", async () => {
  setAlgoInfo("BUBBLE SORT", "O(n²)", "O(1)", "YES");
  disableControls();
  document.getElementById("bubble").classList.add("active");
  initStats();
  await bubbleSort();
  enableControls();
});

async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const speed = 201 - document.getElementById("speed").value;

      bars[j].style.background = "#ff3d5a";
      bars[j + 1].style.background = "#ff3d5a";
      incComparisons();

      await sleep(speed);

      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
        incSwaps();
      }

      bars[j].style.background = "#00d4ff";
      bars[j + 1].style.background = "#00d4ff";
    }
    bars[n - i - 1].style.background = "#00ff88";
  }
}

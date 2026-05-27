document.getElementById("selection").addEventListener("click", async () => {
  setAlgoInfo("SELECTION SORT", "O(n²)", "O(1)", "NO");
  disableControls();
  document.getElementById("selection").classList.add("active");
  initStats();
  await selectionSort();
  enableControls();
});

async function selectionSort() {
  const bars = document.getElementsByClassName("bar");
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    bars[minIndex].style.background = "#ffd700";

    for (let j = i + 1; j < n; j++) {
      const speed = 201 - document.getElementById("speed").value;
      bars[j].style.background = "#ff3d5a";
      incComparisons();
      await sleep(speed);

      if (array[j] < array[minIndex]) {
        if (minIndex !== i) bars[minIndex].style.background = "#00d4ff";
        minIndex = j;
        bars[minIndex].style.background = "#ffd700";
      } else {
        bars[j].style.background = "#00d4ff";
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex);
      bars[i].style.height = `${array[i]}px`;
      bars[minIndex].style.height = `${array[minIndex]}px`;
      bars[minIndex].style.background = "#00d4ff";
      incSwaps();
    }

    bars[i].style.background = "#00ff88";
  }
}

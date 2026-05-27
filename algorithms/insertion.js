document.getElementById("insertion").addEventListener("click", async () => {
  setAlgoInfo("INSERTION SORT", "O(n²)", "O(1)", "YES");
  disableControls();
  document.getElementById("insertion").classList.add("active");
  initStats();
  await insertionSort();
  enableControls();
});

async function insertionSort() {
  const bars = document.getElementsByClassName("bar");
  const n = array.length;

  bars[0].style.background = "#00ff88";

  for (let i = 1; i < n; i++) {
    const speed = 201 - document.getElementById("speed").value;
    let key = array[i];
    let j = i - 1;

    bars[i].style.background = "#ff3d5a";
    await sleep(speed);

    while (j >= 0 && array[j] > key) {
      incComparisons();
      array[j + 1] = array[j];
      bars[j + 1].style.height = `${array[j + 1]}px`;
      bars[j + 1].style.background = "#ffd700";
      await sleep(speed);
      bars[j + 1].style.background = "#00d4ff";
      j--;
    }

    array[j + 1] = key;
    bars[j + 1].style.height = `${key}px`;
    incSwaps();

    // Mark sorted portion
    for (let k = 0; k <= i; k++) {
      bars[k].style.background = "#00ff88";
    }
  }
}

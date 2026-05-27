document.getElementById("quick").addEventListener("click", async () => {
  setAlgoInfo("QUICK SORT", "O(n log n)", "O(log n)", "NO");
  disableControls();
  document.getElementById("quick").classList.add("active");
  initStats();
  await quickSort(array, 0, array.length - 1);
  // Mark all sorted
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < bars.length; i++) bars[i].style.background = "#00ff88";
  enableControls();
});

async function quickSort(arr, low, high) {
  if (low < high) {
    let pi = await partition(arr, low, high);
    await quickSort(arr, low, pi - 1);
    await quickSort(arr, pi + 1, high);
  }
}

async function partition(arr, low, high) {
  const bars = document.getElementsByClassName("bar");
  const speed = 201 - document.getElementById("speed").value;

  let pivot = arr[high];
  bars[high].style.background = "#bf00ff";
  let i = low - 1;

  for (let j = low; j < high; j++) {
    bars[j].style.background = "#ff3d5a";
    incComparisons();
    await sleep(speed);

    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
      bars[i].style.height = `${arr[i]}px`;
      bars[j].style.height = `${arr[j]}px`;
      incSwaps();
    }

    bars[j].style.background = "#00d4ff";
  }

  swap(arr, i + 1, high);
  bars[i + 1].style.height = `${arr[i + 1]}px`;
  bars[high].style.height = `${arr[high]}px`;
  bars[high].style.background = "#00d4ff";
  bars[i + 1].style.background = "#00ff88";

  return i + 1;
}

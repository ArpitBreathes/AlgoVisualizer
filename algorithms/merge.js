document.getElementById("merge").addEventListener("click", async () => {
  setAlgoInfo("MERGE SORT", "O(n log n)", "O(n)", "YES");
  disableControls();
  document.getElementById("merge").classList.add("active");
  initStats();
  await mergeSort(array, 0, array.length - 1);
  // Mark all sorted
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < bars.length; i++) bars[i].style.background = "#00ff88";
  enableControls();
});

async function mergeSort(arr, left, right) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  await mergeSort(arr, left, mid);
  await mergeSort(arr, mid + 1, right);
  await merge(arr, left, mid, right);
}

async function merge(arr, left, mid, right) {
  const bars = document.getElementsByClassName("bar");
  const speed = 201 - document.getElementById("speed").value;

  let temp = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    bars[i].style.background = "#ff3d5a";
    bars[j].style.background = "#ff3d5a";
    incComparisons();
    await sleep(speed);

    if (arr[i] <= arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
    bars[i > mid ? i - 1 : i].style.background = "#00d4ff";
    bars[j > right ? j - 1 : j].style.background = "#00d4ff";
  }

  while (i <= mid) temp.push(arr[i++]);
  while (j <= right) temp.push(arr[j++]);

  for (let k = left; k <= right; k++) {
    arr[k] = temp[k - left];
    bars[k].style.height = `${arr[k]}px`;
    bars[k].style.background = "#ffd700";
    incSwaps();
    await sleep(speed);
    bars[k].style.background = "#00d4ff";
  }
}

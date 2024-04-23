function getInvCount(arr, n) {
  let inv_count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // Value 0 is used for empty space
      if (arr[i] !== 0 && arr[j] !== 0 && arr[i] > arr[j]) {
        inv_count += 1;
      }
    }
  }
  return inv_count;
}

function isSolvable(arr, n) {
  const array = [...arr];
  let ans = getInvCount(array, n);
  return ans % 2 === 0;
}

export default isSolvable;

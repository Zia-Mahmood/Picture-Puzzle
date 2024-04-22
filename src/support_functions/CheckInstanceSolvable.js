function mergeAndCount(arr, l, m, r) {

  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

  let right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = l,
    swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}


function mergeSortAndCount(arr, l, r) {

  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    count += mergeSortAndCount(arr, l, m);
    count += mergeSortAndCount(arr, m + 1, r);
    count += mergeAndCount(arr, l, m, r);
  }
  return count;
}

function isSolvable(arr,n){
  let array = {...arr};
  return mergeSortAndCount(array,0,n)%2===0;
}

export default isSolvable;

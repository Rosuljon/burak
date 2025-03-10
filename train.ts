//  ********************************   Task G     *****************************************

function getHighestIndex(arr: number[]) {
  let max: number = 0;
  let index: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}

let arr: number[] = [5, 21, 12, 21, 8];
console.log(getHighestIndex(arr));

//  ********************************   Task G     *****************************************

function getHighestIndex(arr: number[]): number {
  if (arr.length === 0) return -1;

  let max: number = arr[0];
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
let arr1: number[] = [];
let arr2: number[] = [-7, -3, -9, -1];
console.log(getHighestIndex(arr));
console.log(getHighestIndex(arr1));
console.log(getHighestIndex(arr2));

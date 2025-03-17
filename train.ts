//  ********************************   Task J     *****************************************
const findLongestWord = (word: string) => {
  const arr = word.split(" ");
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) longestWord = arr[i];
  }
  return longestWord;
};

console.log(findLongestWord("i came from Uzbekistan"));

//  ********************************   Task I     *****************************************
// const majorityElement = (arr: number[]) => {
//   let maxElement = 0;
//   let tempCount = 0;
//   let realCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         tempCount++;
//       }
//     }
//     if (tempCount > realCount) {
//       realCount = tempCount;
//       maxElement = arr[i];
//     }
//   }
//   return maxElement;
// };

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

//  ********************************   Task H     *****************************************
// const getPositive = (arr: number[]): string => {
//   return arr.filter((num) => num > 0).join("");
// };

// console.log(getPositive([1, -4, 2, -2, 3]));

//  ********************************   Task G     *****************************************

// function getHighestIndex(arr: number[]): number {
//   if (arr.length === 0) return -1;

//   let max: number = arr[0];
//   let index: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }
//   return index;
// }

// let arr: number[] = [5, 21, 12, 21, 8];
// let arr1: number[] = [];
// let arr2: number[] = [-7, -3, -9, -1];
// console.log(getHighestIndex(arr));
// console.log(getHighestIndex(arr1));
// console.log(getHighestIndex(arr2));

const nums = [1, 2, 3, 4, 6, 7, 9, 11, 15, 5, 8, 12];
const target = 9;
console.log(nums);
console.log("Target :" + target);
const indices = (arrNum, targetNum) => {
  for (i = 0; i < arrNum.length; i++) {
    for (j = i + 1; j <= arrNum.length; j++) {
      const result = [];
      if (arrNum[i] + arrNum[j] === targetNum) {
        result.push(i, j);
        console.log("Index Output: " + result) + "\n";
      }
    }
  }
};

indices(nums, target);

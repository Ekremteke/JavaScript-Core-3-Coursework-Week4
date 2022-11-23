function getLargestNumber(array) {
  let largestNumber = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    if (largestNumber < array[i]) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

module.exports = getLargestNumber;

console.log(getLargestNumber([3, 21, 88, 4, 36]));

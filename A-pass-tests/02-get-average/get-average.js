// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numFilter = numbers.filter((x) => typeof x == "number");

  return numFilter.reduce((a, b) => a + b, 0) / numFilter.length;
}
console.log(average([4, "-", 8, 11, "hello", "57", 0, 2]));
module.exports = average;

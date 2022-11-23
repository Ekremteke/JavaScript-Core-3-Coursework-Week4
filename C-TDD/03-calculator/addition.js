function addition(string) {
  let arrayOfString = string.split(",");
  if (arrayOfString.filter((x) => x < 0).length > 0) {
    throw new Error(
      "Negatives not allowed: " +
        arrayOfString.filter((num) => num < 0).join(",")
    );
  } else {
    return arrayOfString
      .map((x) => (x = "" || x >= 1000 ? x == 0 : +x))
      .reduce((a, b) => a + b);
  }
}
module.exports = addition;

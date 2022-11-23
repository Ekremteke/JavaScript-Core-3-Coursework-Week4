let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman("I")).toEqual(1);
});

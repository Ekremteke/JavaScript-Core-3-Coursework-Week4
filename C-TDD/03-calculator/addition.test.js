let additions = require("./addition");

test("addition number in string separated with comma", function () {
  expect(additions("10,20,30,40")).toEqual(100);
});

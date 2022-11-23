let verifyPasswords = require("./verifyPassword");
test("return validate password", function () {
  expect(verifyPasswords("")).toEqual("Password rejected");
  expect(verifyPasswords("123456aA")).toEqual("verified");
});

let verifyPasswords = require("./verifyPassword");

expect(verifyPasswords("")).equalTo("Password rejected");
expect(verifyPasswords("123456aA")).equalTo("verified");

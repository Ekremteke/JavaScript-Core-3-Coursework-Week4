let removeVowelsFromWords = require("./remove-vowels-in-array");
let removeVowelsFromWord = require("./remove-vowels");

test("remove vowels from all words in array", function () {
  let word = "Samuel";
  let expected = "Sml";

  let output = removeVowelsFromWord(word);
  expect(output).toEqual(expected);

  let input = ["Irina", "Etza", "Daniel"];
  let expected3 = ["rn", "tz", "Dnl"];

  let output3 = removeVowelsFromWords(input);
  expect(output3).toEqual(expected3);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

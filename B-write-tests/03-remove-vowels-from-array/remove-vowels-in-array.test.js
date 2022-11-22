let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let word = "Samuel";
  let expected = "sml";

  let word1 = "Act";
  let expected1 = "ct";

  let word2 = "Assert";
  let expected2 = "ssrt";

  let output = removeVowelsFromWords(word);
  expect(output).toEqual(expected);

  let output1 = removeVowelsFromWords(word1);
  expect(output1).toEqual(expected1);

  let output2 = removeVowelsFromWords(word2);
  expect(output2).toEqual(expected2);

  let input = ["Irina", "Etza", "Daniel"];
  let expected3 = ["rn", "tz", "Dnl"];

  let output3 = removeVowelsFromWords(input);
  expect(output3).toEqual(expected3);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character appears only once
// in the original string, or ")" if that character appears more than once in the original string.
//  Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

const perfomanceTestStr = `
m40r0A4GpUXPfWmSNgmi9zCVUEz4b1HnGoL3Fm5QFPztDBL3UB5LswmQIsTbqJgIBaOEkzlOVZMI1WryDH1QHamukyul9WhWK1bwFzbqUtU4dmpmKAjMeW5VDPgiSccGR0vtu0vkQ61fs02wi6lFGNXR85AptJewfJSAN5ITK8NW7GSzUoHViQyrpUTtpJ5FtuKOc0Zxucnr1w42w0PZOEN6e3p56IKzeVbXebgPHLAHyeUzI5kmz8mCSs43U1zKBJL4VzU1JUcIa3xXXFWoKKVTHowZziJZunsxev25uBfclpBVT3hhi2TOrvne4EXLr6duTAkQP5jFGsmso9q2aGZHE4H2STHMJSzhjP5bUq74bYV5CXGRYYKGZOYi0WQEY18KlF4jeeKna5EqjIjAFNBOi4HzNJ8M6JS0PzBTDguUfYoGf03Vhnc1QdMcNSilFduK2mNGjf2ISpqzQfpPCR67VR2apyoAgfQnpmFMTtxWeVAx5YbvAWhsyln2BEQGlt5Oo8vwn5HhPIZnlrHcJqeWpG37mezCEqCpZjc8eG3VTB9T22qAFrh135BaQ9aqV6XhtHYKBjoMnwqcL5KVaLsT8khFkpqeAr3Y46bTO0IDq47OD0Icb2jj6yce5QJz0waeRsDa9VwHxW37ikm8HZvvFz7ZtSC64SZiUjKt66X2YKKjncvNf8l1GASsSpDUYhQTnd9tIqm1UcB578uvcio4NoomLU91aoBeBiVyiIAG4Ed0WtqQGVCQBnq6IlTAUC3aflTDngU6Kd8RrZcbdoeBYEzFGb3Lt61vyP2AZJ7UiHZ5OYypnpcOzPPncxwVCeRywMLuKBBRsCvzdgvK2pIrdVu4QSyWTitcxPUxqyYIPjJZrMhhkWGdEsqAFsmfCvlIxvGlTR9W4y3MXu27JBnAYeXhRTetZCvjc05p5fp11ldta6MMi3KRI3lvZ3HXLaPWwfQSqj4VBXBZhwrBj8UF70q2gUTvLyw31xVI
`;

// faster if no duplicates

function duplicateEncode(word) {
  const formattedString = word.toLowerCase().split('');

  const set = new Set(formattedString);

  if (set.size === formattedString.length)
    return formattedString.map(() => '(').join('');

  const repeatedItems = [
    ...new Set(
      formattedString.filter((i, index) => formattedString.indexOf(i) !== index)
    ),
  ];

  return formattedString
    .map((i) => (repeatedItems.includes(i) ? ')' : '('))
    .join('');
}

console.time('solution1');
duplicateEncode(perfomanceTestStr);
console.timeEnd('solution1'); // ~420ms

// Refactored: faster, cleaner
function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split('')
    .map((item) => (word.indexOf(item) == word.lastIndexOf(item) ? '(' : ')'))
    .join('');
}

console.time('solution2');
duplicateEncode2(perfomanceTestStr);
console.timeEnd('solution2'); // ~220ms

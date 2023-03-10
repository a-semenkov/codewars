// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  if (!/[a-z]/gi.test(text)) return '';
  return text
    .toLowerCase()
    .match(/[a-z]/gi)
    .map((el) => el.charCodeAt(0) - 96)
    .join(' ');
}

// faster

function alphabetPositionFor(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const code = text.toLowerCase().charCodeAt(i);
    if (code > 96 && code < 123) result += code - 96 + ' ';
  }

  return result.slice(0, result.length - 1);
}

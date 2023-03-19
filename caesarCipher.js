// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//["test", =>  "grfg"], ["Test", => "Grfg"]])

// решение через unicode таблицу

function rot13(message) {
  let min, max;

  return message
    .split('')
    .map((i) => {
      if (!/[a-zA-Z]/.test(i)) return i;

      if (i.toUpperCase() === i) {
        min = 65;
        max = 90;
      } else {
        min = 97;
        max = 122;
      }

      const newLetterIdx = i.charCodeAt(0) + 13;
      newCharCode =
        newLetterIdx > max ? min + (newLetterIdx - max - 1) : newLetterIdx;
      return String.fromCharCode(newCharCode);
    })
    .join('');
}

v = rot13('Test,./3424');
v;

// решение через hardcode alphabet

function rot13v1(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let result = '';

  for (let i = 0; i < message.length; i++) {
    const letterIdx = alphabet.indexOf(message[i].toLowerCase());

    if (letterIdx < 0) {
      result += message[i];
      continue;
    }

    const newIdx = (letterIdx + 13) % alphabet.length;

    result +=
      message[i].toUpperCase() === message[i]
        ? alphabet[newIdx].toUpperCase()
        : alphabet[newIdx];
  }

  return result;
}

z = rot13v1('Test');
z;

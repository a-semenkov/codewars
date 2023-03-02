// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(sentence) {
  wordValue = 0;
  const u = sentence.split('').reduce((acc, item, index, arr) => {
    if (/[\w]/g.test(item) && index !== arr.length - 1) {
      wordValue += item.toLowerCase().charCodeAt(0) - 96;
    } else {
      acc.push(wordValue);
      wordValue = 0;
    }
    return acc;
  }, []);

  const maxWordIndex = u.indexOf(Math.max(...u));
  return sentence.split(' ')[maxWordIndex];
}

//

v = high('man i need a taxi up to ubud');
v;

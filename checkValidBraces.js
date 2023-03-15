// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  if (parens.length % 2 !== 0) return false;

  const p = parens.split('');

  while (p.length) {
    const firstElement = parens[0];
    const closingBracket = ')';

    if (
      firstElement === closingBracket ||
      parens[parens.length - 1] === firstElement
    )
      break;

    const closingBracketIndex = p.indexOf(closingBracket);

    if (closingBracketIndex > 0) {
      p.splice(closingBracketIndex, 1);
      p.shift();
    } else break;
  }

  return p.length === 0;
}

t = validParentheses('()()((()');
t;

//clever + faster

function validParentheses2(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

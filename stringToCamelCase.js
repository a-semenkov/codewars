// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
  return [...this].reduce((acc, i, index, arr) => {
    if (index === 0 || arr[index - 1] === ' ') {
      acc += i.toUpperCase();
    } else if (i !== ' ') {
      acc += i;
    }
    return acc;
  }, '');
};

String.prototype.camelCase2 = function () {
  return this.split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

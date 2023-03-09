function findNumberOfDoublesInString(string) {
  return string.split('').reduce((acc, item, index, array) => {
    array.indexOf(item) !== array.lastIndexOf(item)
      ? (acc[item] = acc[item] + 1 || 1)
      : null;
    return acc;
  }, {});
}

const result = findNumberOfDoublesInString('perception');
console.log(result);

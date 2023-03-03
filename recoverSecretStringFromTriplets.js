// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string.
// "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they
//  are valid triplets and that they contain sufficient information to deduce
//  the original string. In particular, this means that the secret string will never
//   contain letters that do not occur in one of the triplets given to you.

const secret1 = 'whatisup';
const triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

// Алгоритм: Создаем набор уникальных букв, из которых состоит слово
// Для каждой такой буквы создаем набор букв, которые идут сразу за ней
// Находим первую букву, удаляя из набора уникальных букв все, которые встречаются на второй или поледующей позиции
// запускаем рекурсивную функцию, проходясь по каждой букве, которая идет за переданной в функцию и добавляем результат
// Если длина найденного результата равна количеству уникальных букв, а в очереди букв не осталось, считаем, что нашли ответ
// Минус подобной реализации в данном случае: мы проходим по всем вариантам, даже если нашли ответ
// Можно переписать, но в данном случае задача решена

function recoverSecret(triplets) {
  let secretLetters = new Set(triplets.flat());
  const secretLength = secretLetters.size;

  const letterSets = new Map(
    [...secretLetters].map((item) => [item, new Set()])
  );

  let firstLetter = new Set(secretLetters);

  let answer = '';

  for (const set of triplets) {
    for (let i = 0; i < set.length; i++) {
      if (set[i + 1]) {
        letterSets.get(set[i]).add(set[i + 1]);
        firstLetter.delete(set[i + 1]);
      }
    }
  }

  function getSecretString(letter, result = '') {
    const nextLetters = [...letterSets.get(letter)];

    if (!nextLetters.length && result.length === secretLength - 1)
      answer = result + letter;

    nextLetters.forEach((el) => getSecretString(el, result + letter));
  }

  getSecretString(firstLetter.values().next().value);
  return answer || 'no answer';
}

// clever
// Алгоритм: находим первую букву, которая всегда может находиться только в первой позиции набора
// Добавляем эту букву в ответ, удаляем  из всех других наборов, запускаем функцию рекурсивно для поиска следующей буквы

const recoverSecretCl = function (triplets) {
  console.log('triplet', triplets);
  for (let [first] of triplets) {
    if (triplets.every((set) => set.indexOf(first) <= 0)) {
      // в каждом наборе первая буква first либо находится на первом месте, либо не содержится вовсе. То есть это определенно первая буква слова (либо следующая буква в слове когда проходим рекурсией)
      triplets
        .filter(([item]) => item == first) // отфильтровываем только те наборы в которых первая буква (first) стоит на первом месте
        .forEach((set) => set.shift()); // удаляем первую букву из наборов и возвращаем ее, запуская рекурсию
      console.log('first', first);
      return first + recoverSecretCl(triplets.filter((set) => set.length > 0));
    }
  }

  return '';
};

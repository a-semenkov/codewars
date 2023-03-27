type reduceReturnType<U extends Function> = ReturnType<() => U>;

export default function FizzBuzz() {
  // Конкретно здесь, по условию, если число кратно и 3 и 5 нужно получить только результат первой функции, т.е. fizz
  const returnElement =
    <U extends Function>(...fns: U[]) =>
    <T extends number>(value: T): T | string =>
      fns.reduce(
        (prevValue: T | string, fn: U) => fn(prevValue) || prevValue,
        value
      );

  const generateLetter =
    <T>(divider: number, replacer: T) =>
    (currNum: number): T | null =>
      currNum % divider === 0 ? replacer : null;

  const fizz = generateLetter(3, 'fizz');
  const buzz = generateLetter(5, 'buzz');

  return Array.from({ length: 100 }, (_, i) =>
    returnElement(fizz, buzz)(i + 1)
  );
}

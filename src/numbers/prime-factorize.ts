export {primeFactorize}
/**
 * @description - This is a function that returns the prime factors of a number in an object.
 *
 * @returns - An object with the prime factors as a key
 * and the number of times the prime factors occur in the factorization as its value
 *
 * @param thisArg - Refers to the number whos prime factors are to be found.
 */
const primeFactorize = function(obj: number): Object {
  const factorMap = {};
  if (obj % 2 === 0) {
    factorMap["2"] = 0;
    while (obj % 2 === 0) {
      obj /= 2;
      factorMap["2"] += 1;
    }
  }
  for (let div = 3; div <= Math.sqrt(obj); div += 2) {
    if (obj % div === 0) {
      factorMap[div.toString()] = 0;
      while (obj % div === 0) {
        obj /= div;
        factorMap[div.toString()] += 1;
      }
    }
  }
  if (obj != 1) factorMap[obj.toString()] = 1;
  return factorMap;
};

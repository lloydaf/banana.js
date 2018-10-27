interface Array<T> {
  difference(other: Array<T>, thisArg?: Array<T>): Array<T>;
}
/**
 * Returns the difference betweeen two arrays
 * @param other - The array who's elements are to be removed from the first array
 * @param thisArg - An optional argument which refers to the array on whom the 
 * difference operation is performed
 * 
 * @returns The difference between the two arrays.
 */
Array.prototype.difference = function<T>(
  other: Array<T>,
  thisArg?: Array<T>
): Array<T> {
  let obj = thisArg || this;
  return obj
    .map(el => JSON.stringify(el))
    .filter(one => other.map(el => JSON.stringify(el)).indexOf(one) === -1)
    .map(el => JSON.parse(el));
};

declare module "difference" {
  export = Difference;
}

declare const Difference: Array<any>;
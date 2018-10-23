interface Array<T> {
  intersection(other: Array<T>, thisArg?: Array<T>): Array<T>;
}

/**@description - This is a function that lets you
 * find the intersection of two arrays.
 * @returns - The intersection of the arrays.
 * @param thisArg? - Optional parameter that takes one of the arrays to find intersection of,
 * if using Array.prototype.intersection
 * @param other - Parameter that takes the other array to find intersection of.
 */

Array.prototype.intersection = function<T>(
  other: Array<T>,
  thisArg?: Array<T>
): Array<T> {
  let obj = thisArg || this;
  return obj
    .map(el => JSON.stringify(el))
    .filter(one => other.map(el => JSON.stringify(el)).indexOf(one) > -1)
    .map(el => JSON.parse(el));
};

declare const Intersection: Array<any>;

declare module "intersection" {
  export = Intersection;
}
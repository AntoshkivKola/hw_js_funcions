// task1

/** 
 * determines the age of majority
 * @param {number} age
 * @returns {boolean}
*/

const isAdult = function (age) {
  if (age >= ADULT_AGE) {
    return true;
  }
  return false;
}

//task2

/** 
 * checks the multiplicity of the first number by the second number
 * @param {number} checkedNumber
 * @param {number} multiplicityNumber
 * @returns {boolean}
*/
const checkMultiplicity = function (checkedNumber, multiplicityNumber) {
  if (checkedNumber % multiplicityNumber === 0) {
    return true;
  }
  return false;
}

//task3

/** 
 * checking a triangle for existence
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
*/
const isTriangleReal = function (a, b, c) {
  if(a > 0 && b > 0 && c > 0 && (a < (b+c) && b < (a+c) && c < (a+b))){
    return true;
  }
  return false;
}
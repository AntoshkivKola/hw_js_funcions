// task1

/** 
 * determines the age of majority
 * @param {number} age
 * @returns {boolean}
*/

const isAdult = function(age){
  if(age >= ADULT_AGE){
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
const checkMultiplicity = function(checkedNumber, multiplicityNumber){
  if(checkedNumber % multiplicityNumber === 0){
    return true;
  }
  return false;
}

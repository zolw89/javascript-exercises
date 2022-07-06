const add = function(num1, num2) {
  let add = num1 + num2;
  return add
	
};

const subtract = function(num1, num2) {
	let subs = num1 - num2;
  return subs
};

const sum = function(array) {
  let result = 0
  for(let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result
	
};

const multiply = function(array) {
  let result = 1;
  for(let i = 0; i < array.length; i++) {
    result *= array[i]
  }
  return result

};

const power = function(num, pow) {
  let result = Math.pow(num, pow)
  return result
	
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;

  for(let i=1; i<=num; i++) {
    result *= i
  }
  return result
	
};

console.log(add(5,3));
console.log(subtract(10,4));
console.log(sum([]));
console.log(multiply([3,2,1]));
console.log(power(2,5));
console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

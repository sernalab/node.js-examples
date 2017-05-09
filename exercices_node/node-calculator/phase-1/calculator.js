module.exports.sum = function sum(num1, num2) { 
  console.log('The sum of 3 & 7 is: ' + (num1 + num2))
}

module.exports.multi = function multi(num1, num2) { 
  console.log('The multiplication of 3 & 7 is: ' + (num1 * num2))
}

//---------------------

// best way to use our code in the future:

// function sum(num1, num2) { 
//   console.log('The sum of 3 & 7 is: ' + (num1 + num2))
// }

// module.exports.multi = function multi(num1, num2) { 
//   console.log('The multiplication of 3 & 7 is: ' + (num1 * num2))
// }

// module.exports.sum = sum
// module.exports.multi = multi


//even: 

module.exports = {
	sum: sum,
	multi: multi
}
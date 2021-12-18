//Exercise from nodeschool javascripting

/*

function math (firstNumber, secondNumber, thirdNumber) {
  console.log((secondNumber * thirdNumber) + firstNumber)
}

console.log(math(53, 61, 67));

This attempt produces:
4140
undefined

The expected solution is:
4140

*/

//The next one worked, but I didn't use console.log
//However, the official solution looks very much like my previous attempt:

/*
    function math (a, b, c) {
      return (b * c) + a
    }
    
    console.log(math(53, 61, 67))
*/

function math (firstNumber, secondNumber, thirdNumber) {
  console.log((secondNumber * thirdNumber) + firstNumber)
}

math(53, 61, 67);
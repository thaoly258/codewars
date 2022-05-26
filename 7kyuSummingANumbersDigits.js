//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
//For example: (Input --> Output)
//
//10 --> 1
//99 --> 18
//-32 --> 5

function sumDigits(number) {
    let arr = String(number).split('').map((number) => Number(number)).filter(x => x == Number(x))
    return arr.reduce((a,c) => a + c)
  }
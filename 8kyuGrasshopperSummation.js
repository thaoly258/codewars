//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
//For example:
//
//summation(2) -> 3
//1 + 2
var summation = function (num) {
    let arr = Array.from({length: num + 1}, (v,i) => i)
    return arr.reduce((a,c) => a + c, 0)
  }
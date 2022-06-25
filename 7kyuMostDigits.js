//Find the number with the most digits.
//
//If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let arr = array.map(el => el.toString().length)
    let i = Math.max(...arr)
    return array[arr.indexOf(i)]
  }
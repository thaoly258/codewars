//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//The input will be a lowercase string with no spaces.
//
//Good luck!

function capitalize(s){
    let arr = s.split('')
    let res = []
    let first = arr.map(function (el,i){
      if(i%2) return arr[i].toUpperCase()
      else return arr[i]
    }).join('')
    res.push(first)
    let second = arr.map(function (el,i){
      if(i%2) return arr[i]
      else return arr[i].toUpperCase()
    }).join('')
    res.unshift(second)
    return res
  }
//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//Examples
//replace("Hi!") === "H!!"
//replace("!Hi! Hi!") === "!H!! H!!"
//replace("aeiou") === "!!!!!"
//replace("ABCDE") === "!BCD!"
function replace(s){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let arr = s.split('')
    let ar = arr.map(function (el,i){
      if(!vowels.includes(arr[i])){
        return arr[i]
      }else {
        return '!'
      }  
    })
      return ar.join('')
    }
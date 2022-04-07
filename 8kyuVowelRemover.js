//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Examples
//"hello"     -->  "hll"
//"codewars"  -->  "cdwrs"
//"goodbye"   -->  "gdby"
//"HELLO"     -->  "HELLO"

function shortcut (string) {
    let vow = ['a', 'e', 'o', 'i', 'u']
    let arr = string.split('').filter(el => !vow.includes(el))
    return arr.join('')
  }
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    let ar = arr.map(function (el,index){
      if (arr.lastIndexOf(el) !== index || arr.indexOf(el) !== index){
        return ')'
      }else {
        return '('
      }
    })
  return ar.join('')
}
//Count the number of Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort()
    let arr1 = arr.filter((el,index) => arr.indexOf(el) !== index)
    let arr2 = arr1.filter((el,id) => arr1.indexOf(el) == id)
    return arr2.length
   }
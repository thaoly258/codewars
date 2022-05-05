//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){
    let res = []
   let arr = message.split('')
   let arr1 = arr.map(x => x.charCodeAt())
   let arr2 = arr1.map((el,index) =>{
     if((arr1[index] >= 97  && arr1[index] <= 109) || (arr1[index] >= 65 && arr1[index] < 77)){
       res.push(arr1[index] +  13) 
     }else if((arr1[index] > 109 && arr1[index] <= 122) || (arr1[index] >= 77 && arr1[index] <= 90)){
       res.push(arr1[index] - 13) 
     }else if((arr1[index] < 65)|| (arr1[index] > 90) && arr1[index] <= 96){
       res.push(arr1[index])
     }
     return res
   } )
   let arr3 = res.map(x => String.fromCharCode(x))
   return arr3.join('')
  }
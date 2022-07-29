//Sort the Gift Code
//Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
//
//Examples (Input -- => Output):
//"abcdef"                      -- => "abcdef"
//"pqksuvy"                     -- => "kpqsuvy"
//"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code){
    let arr = code.split('')
    arr = arr.map((el,i)=> arr[i].charCodeAt()).sort((a,b)=> a-b)
    return String.fromCharCode(...arr)
  }
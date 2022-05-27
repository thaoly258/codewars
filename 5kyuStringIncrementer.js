//Your job is to write a function which increments a string, to create a new string.

//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
//Examples:
//
//foo -> foo1
//
//foobar23 -> foobar24
//
//foo0042 -> foo0043
//
//foo9 -> foo10
//
//foo099 -> foo100

function incrementString (strng) {
    if(!strng) return '1'
    let [left, right = '0'] = strng.split(/(\d*$)/),
         length = right.length;
  
      return left + (+right + 1).toString().padStart(length, '0');
  }
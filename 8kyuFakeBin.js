//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let arr = x.split('')
    let arr1 = arr.map(x => {
      if(x < 5){
        return 0
      }else if (x >=5){
        return 1
      }
    })
    return arr1.join('')
  }
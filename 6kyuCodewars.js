//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    let res = []
    for (let i = a; i <= b; i++){
      let nums = String(i).split('')
      if (i === nums.reduce(function(previousValue,currentValue,currentIndex){
        return previousValue + Math.pow(currentValue,currentIndex+1)},0)){
        res.push(i)
      } 
          } 
     return res
    }
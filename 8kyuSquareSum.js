//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    if (numbers.length == 0){
      return 0
    }else{
       return numbers.map(x => x*x).reduce((a,c) => a + c)
    }
  }
//you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
function tribonacci(sign,n){
    for (var i = 3; i < n; i++) {
      sign[i] = sign[i-1] + sign[i-2] + sign[i-3];
    }
    return sign.slice(0, n);
  }
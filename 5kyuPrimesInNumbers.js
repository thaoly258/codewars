////Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//
// "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// 
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    let factors = []
    let divisor = 2
    let str = ''
    let obj = {}
    while (n >= 2){
      if (n % divisor == 0){
        factors.push(divisor)
        n = n / divisor
      }else {
        divisor++
      }
    }
   factors.map(function(x){
               obj[x] ? obj[x]++ : obj[x] = 1;
             });
             for (let item in obj) {
               obj[item] == 1 && (str += '('+ item +')')
               obj[item] > 1 && (str += '('+item +'**'+ obj[item]+')')
             }
             return str
            }
//Count the number of divisors of a positive integer n

function getDivisorsCnt(n){
    let res = []
    for (let i = 0 ; i <=n; i++){
      if (n % i === 0){
        res.push(i)
      }
    }return res.length
}
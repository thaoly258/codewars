//Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
//
//We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
//
//Example:
//list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
//list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
    const res = [];
     for (let i = m; i <= n; ++i) {
        let sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
        let ok = Number.isInteger(Math.sqrt(sum));
        if (ok) {
           res.push([i, sum]);
        }
     }
     return res;
  }
  function getDivisors (n) {
     const divisors = [];
     for (let i = 1; i <= n / 2; ++i) {
        if (n % i) {
           continue;
        }
        divisors.push(i);
     }
     return divisors.concat([n]);
  }
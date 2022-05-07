//Given an array of integers, find the one that appears an odd number of times.

function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
            
           let count = 0;
            
           for (let j = 0; j < A.length; j++)
           {
               if (A[i] == A[j])
                   count++;
           }
           if (count % 2 != 0)
               return A[i];
       }
       return -1;
   }
   
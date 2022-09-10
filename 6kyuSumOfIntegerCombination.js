//Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).

//Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:
//
//find([3,6,9,12],12) = 5.
//More examples in the test cases.

function find(arr, n){
    return combinationSumRecursive(arr, n)
    }
  
    function combinationSumRecursive(
    arr,
    remainingSum,
    finalCombinations = [],
    currentCombination = [],
    startFrom = 0,
  ) {
    if (remainingSum < 0) {
      return finalCombinations;
    }
  
    if (remainingSum === 0) {
      finalCombinations.push(currentCombination.slice());
      return finalCombinations;
    }
  
    for (let candidateIndex = startFrom; candidateIndex < arr.length; candidateIndex += 1) {
      const currentCandidate = arr[candidateIndex];
      
      currentCombination.push(currentCandidate);
  
      combinationSumRecursive(
        arr,
        remainingSum - currentCandidate,
        finalCombinations,
        currentCombination,
        candidateIndex,
      );
      currentCombination.pop()
      
    }
    
  let final = finalCombinations.filter(el => el.length <= arr.length)
      return final.length
  }
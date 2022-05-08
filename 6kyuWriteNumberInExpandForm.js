//You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
    return num.toString()
            .split('')
            .map((num,index,arr) => num + '0'.repeat(arr.length - index - 1))
            .filter(x => x != 0)
            .join(' + ')
    }
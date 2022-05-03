//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
function sumArray(array) {
    if (array == null || array.length < 3){
        return 0
    }else{
       array.sort((a,b) => a - b)
       let arr1 = array.slice(1,-1)
      return arr1.reduce((a,c) => a +c)
    }
}
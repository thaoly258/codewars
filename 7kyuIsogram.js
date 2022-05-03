function isIsogram(str){
    let arr = str.toLowerCase().split('').sort()
    return new Set(arr).size == arr.length
}

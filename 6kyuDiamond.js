//You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//A size 3 diamond: " *\n***\n *\n"

function diamond(n){
    let str =''
    if(n % 2 === 0 || n < 0){
      return null
    }else{
    for (let i = 1; i <=n; i+=2){
      for (let j = n; j>i; j-=2){
        str += ' '
      }
      for(let k = 0; k < i ; k++){
        str += '*'
      }
      str += '\n'
    }
    for (let i = 1; i <= n - 1; i+=2){
      for (let j = 0; j < i ; j+=2){
        str += ' '
      }
      for (let k = (n-i) -1; k > 0; k--){
        str += '*'
      }
      str +='\n'
    }
    return str
  }
    }
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    let arr = pin.split('')
    let number = [1,2,3,4,5,6,7,8,9,0]
    if(pin.length == 4 || pin.length == 6){
     return arr.every( ai => number.includes(parseInt(ai)) )
     }
    else {
      return false
    }
    }
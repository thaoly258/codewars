//When provided with a letter, return its position in the alphabet.

//Input :: "a"
//
//Ouput :: "Position of alphabet: 1"

function position(letter){
    return `Postion of alphabet: ${letter.charCodeAt() -96}`
}
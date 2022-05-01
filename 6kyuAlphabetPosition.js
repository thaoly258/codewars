//Replace With Alphabet Position
function alphabetPosition(text) {
    let arr = text.split('').filter(el => el.toLowerCase() !== el.toUpperCase())
    return arr.map(el => el.toString().toLowerCase().charCodeAt() - 96).join(' ')
    }
/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split("").reverse().join("") //My way of solving this
}


function reverseString(text){
let result = ""

for(let char of text){
    result = char + result
    }
    return result;
}



 function reverseString(text){
    if(text === "") {
        return ""
    } else {
        return reverseString(text.substr(1) + text[0])
    }
}



function reverseString(text){
    return text.split("").reverse((letter, char) => char + letter, "").join('')
}



module.exports = reverseString
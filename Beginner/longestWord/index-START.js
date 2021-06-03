/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) { //// My solution. The SLOWEST BY FAR
    let longest = text.split(" ").sort((a, b) => b.length - a.length);
    return longest[0]
}


function longestWord(text){
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > maxLength){
            maxLength = wordArray[i].length;
            result = wordArray[i]
        }
    }
    return result
}

function longestWord(text){ /////////////// LEARN THIS ONE!!! ITS EASY TO LEARN
    let result = text.split(' ').reduce((currentWord, maxLength) => {
        if(currentWord.length > maxLength.length){
            return currentWord
        } else {
            return maxLength
        }
    }, "")
    return result
}




module.exports = longestWord
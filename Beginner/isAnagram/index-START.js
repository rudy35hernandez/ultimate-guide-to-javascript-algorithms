/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(word1, word2){//// My solution minus the replace part
    let sort1 = word1.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    let sort2 = word2.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    return sort1 === sort2
  }


function isAnagram(word1, word2){
    const sanitizeString = function(str){
      return str.toLowerCase().replace(/[^a-z\d]/g, "").split('').sort().join('')
    }
      return sanitizeString(word1) == sanitizeString(word2)                                 
   }



function isAnagram(stringA, stringB){/////////// THIS IS BY FAR THE FASTEST ALGORITHM
    function createCharMap(text){
        let charMap = {}

        for (let char of text){
            if(charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }
        
        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

module.exports = isAnagram
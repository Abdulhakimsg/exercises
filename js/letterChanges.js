//Challenge : Letter Changes
  //Change every letter of string to one that follows it 
  //capitalise the vowels
  //Z should turn into A
//Expeceted Run : 'hello there'=== 'Ifmmp UIfsf'

function letterChanges(str) {

  //use replace + regex
    // if its z or Z replace with a
    // else replace character code to next in charactercode
  //user replace + regex
    // replace any lowercase vowesl with uppercase

  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z' || char === 'Z') {
      return 'a'
    }
    else {
      return String.fromCharCode(char.charCodeAt() + 1)      
    }
  })

  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase();
  })

  return newStr
}

console.log('letterChanges' , letterChanges('hello there'))
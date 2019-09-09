//Challenge : Anagram , two words with same characters returns true
//Expected run , elbow === below

function isAnagram(str1, str2) {
  
  //Create helper function formatStr
  return formatStr(str1) === formatStr(str2)
  
}

function formatStr(str) {

  //remove any character not within a-z0-9 replace with space
  //make everything lowerCase
  // split into an array of characters
  // sort out from a - z , put in order
  // then join back to string



  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

console.log(isAnagram('below','elbw'))
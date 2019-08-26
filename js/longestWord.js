//Challenge : Return longest word of a string
//Expected Run : ('Hellos , my name is Hakim ') === 'Hellos'
  //: ('rain , busy is me') === 'rain' , 'busy'
  //remove comma 

function longestWord(sen) {

  //Create filtered array
    //remove any commas or any unsual expressions
  //Sort by length using sort function
  //filter array of words using sorted to filter to all words that matches
  //length of longest word

  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length 
  })

  const longestWordArr = sorted.filter((word) => {
    return word.length === sorted[0].length
  })
  
  console.log(longestWordArr)
  
}

longestWord('hello , my name is eminem')
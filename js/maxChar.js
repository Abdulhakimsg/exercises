//Challenge : Maximum characters
//Expected Run : ('Javascript') == 'a'

function maxCharacter(str){
    //Initialise a object that would map each character as key and its occurence as value
        //Run a foreach loop for the string
            // if char doesn't exist map it and add value one
            // if it exist , incrase value by 1
    //Initialise variable maxCount and maxChar
        //Run a loop through the map
            //if key in object in larger than maxNum and maxChar
            //assign the index valueto maxNum and maxChar
        //Print out maxChar

    const charMap = {}  

    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char] ++
        } 
        else{
            charmap[char] = 1
        }
    })

    let maxNum = 0 
    let maxChar = ''

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char;
        }
    }
    return maxChar
}

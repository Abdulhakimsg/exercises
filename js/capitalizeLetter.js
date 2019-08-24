//Challenge : capitalise ltters
//Expected run: ('i love you') => 'I Love You'

function capitaliseLetter(str){

    //convert all to lowercase
    //split the acceptem params into individual words
    //in each word , isolate first letter and uppercase it , concat the rest of the character
    //join back all character to return a proper sentence with space

    return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ')
}
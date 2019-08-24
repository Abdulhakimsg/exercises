//Challenge : Reverse a string
//Expected Run : eg 'hello' -> 'olleh'

function reverString(str){
    
    //Method 1
    //Convert string to array first using split
    //Then reverse the array using revers
    //Parse the array back in to the string using join
    return str.split('').reverse().join('');

    //Method 2
    //initialise an empty string called revString
    //Run through an array , start from back to front
    //for every visited index concat to the front of the string
    let revString = ''
    for(let i = str.length -1 ; i >= 0 ; i--){
        revString = revString + str[i]
    }
    return revString
}
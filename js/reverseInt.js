//Challenge: Reverse an integer
//Expected run: 521 => 125 , -123 => -321

function reverseInt(int){

    //Convert integer to string
    //Reverse the converted string
    //Parse string into integer
    const revString = int.toString().split('').reverse().join('')

    return parseInt(revString) & Math.sign(int)
}
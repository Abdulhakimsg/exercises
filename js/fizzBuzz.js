//Challenge FizzBuzz
// Write a program that prints all numbers form 1 to 100
// For multiples of 3 , instead of number , print Fizz
// For multiples of 5 , instead of number print Buzz
// For multiples of both 3 and 5 print 'fizzBuzz

function fizzBuzz(){
    //Run for loop prints all numer
    // if i modulus 3 print fizz
    // if i modulus of 5 print buzz
    // if i modulus of 3 & 5 print 

    for(let i = 1 ; i <=100 ; i++ ){
        if(i% 3 === 0 && i%5 === 0){
            console.log('FizzBuzz')
        }
        else if (i % 3 === 0 ){
            console.log('Fizz')
        }
        else if (i % 5 === 0){
            console.log('Buzz')
        }
        else{
            console.log(i)
        }
    }

}
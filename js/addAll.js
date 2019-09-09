//Challenge : Add all number
//Return a sum of all parameters entered regardless of numbers

function addAll(...numbers){
    let total = 0 
    numbers.forEach(number => (total += number))
    return total
}

console.log(addAll(2,3))
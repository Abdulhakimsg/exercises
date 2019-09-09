//Challenge : Destroy
//Remove from array whatever is in the arguments.Return leftover valuesin array
//Expected run : destroy([2,3,'hello],2) === [3,4,'hello]

function destroy(arr,...rest){
    return arr.filter(val => !rest.includes(val))
}

console.log(destroy([2,3,4,'hello'],'hello'))
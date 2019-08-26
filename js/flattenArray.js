//Challenge Flatten Array
  //Take arrays of arrays and flatten to a singel array
// Expected Run : [[1,2],[3,4],[5,6],[7]] === [1,2,3,4,5,6,7]

function flattenArray(arr) {
  // return arr.reduce((a, b) => {
  //   return a.concat(b)
  // } , [])

  arr.flat(1)

}

const myArray = [[1, 2], [3, 4]]
let merged = myArray.flat(1)

console.log('merged',merged)
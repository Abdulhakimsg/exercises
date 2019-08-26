// Challenge : Split an array into chuncked arrays of a specific length
// Expected run : ([1,2,3,4,5,6,7] , 3) === [[1,2,3],[4,5,6],7]
// ([1,2,3,4,5,6],2) === [[1,2],[3,4],[5,6]]

function chunkArray(arr, len) {

  //Initialised chunkedArray 
  //set index to 0
  //Loop while index is less than array length
    //Slice out from starting point to starting +  length
    //After slicing , replace starting point with previous start + length
  // return ChunkedArray

  const chunkedArray = []

  let startIndex = 0 

  while(startIndex < arr.length){
    chunkedArray.push(arr.slice(startIndex, startIndex + len))
    startIndex += len
  }

  return chunkedArray
}

console.log(chunkArray([1,2,3,4,5,6,7] , 2))
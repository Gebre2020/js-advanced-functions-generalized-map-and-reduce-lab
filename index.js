// Add your functions here
function map(array, callback) {
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(obj, callback, accumulator) {
    const keys = Object.keys(obj)
    let i = 1
  
    if (accumulator) {
      i = 0
    } else {
      accumulator = obj[keys[0]]
    }
  
    for (i; i < keys.length; i++) {
      accumulator = callback(accumulator, obj[keys[i]])
    }
    return accumulator
  }
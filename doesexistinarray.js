// more advanded way
// function doesExistInArray(namesArray, nameInput) {
//     return namesArray.indexOf(nameInput) !== -1
// }

// const sampleArray = ['Maria', 'Todd', 'Ahmed']

// const namesDoesExist = doesExistInArray(sampleArray, 'Ahmed')

// console.log(namesDoesExist)

// for loop way
const sampleArray = ['Maria', 'Todd', 'Ahmed']

function checkIfNameExists(array, nameInput) {
    for(i = 0; i < array.length; i++){
        if(array[i] === nameInput) return true
    }
    return false
}
const doesNameExist = checkIfNameExists(sampleArray, 'Todd')

console.log(doesNameExist)
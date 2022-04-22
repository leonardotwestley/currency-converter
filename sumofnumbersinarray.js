const numbers = [2,4,6,7,12,34]  // user input
function findSumOfNumbersArray(numbers){ //declare function
    let sumOfNumbersArray = 0           // vari to store sum
    for(let i = 0;i < numbers.length; i++){ //loop thru each index and adding up values
        sumOfNumbersArray += numbers[i] //
    }
return sumOfNumbersArray   //
}

console.log(findSumOfNumbersArray(numbers)) //call func w input







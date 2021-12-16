/**
 * Create a function that takes in an non empty array and a target sum
 *  - If any 2 numbers adds up to the sum, return the two numbers in an array
 *  - Else, return an empty array
 *  - Cannot add a single interger to itself
 */

function sumOfTwo(array){
    // Used to get the numbers and add them together
    let arraySum = []

    // The target sum the numbers have to add up to.
    const targetSum = 10

    // Add the first 2 values in the array
    let sumValue = array[0] + array[1]

    // Loops until target is reached
    while (sumValue !== targetSum){
        // Remove first 2 values from the given array
        // Places the value in a different array and add the value
        if (sumValue == targetSum){
            arraySum.push(array[0], array[1])
            return arraySum
        } else {
            // Removes the first 2 valuse of the array
            array.splice(0, 2)
            return arraySum
        }
    }
}

array = [3, 5, -4, 8, 11, 1, -1, 6]

console.log(sumOfTwo(array))
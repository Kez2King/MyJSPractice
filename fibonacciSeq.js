function fibonacciSeq(number){
    // Start of the sequence
    let num1 = 0
    let num2 = 1
    let newList = []
    for(let i = 0; i < number; i++){
        // Gives sums the next value
        nextTerm = num1 + num2
        // Increments for the next values
        num1 = num2
        num2 = nextTerm
        // Adds it into the empty array
        newList.push(nextTerm)
    }
    return newList
}

console.log(fibonacciSeq(6))
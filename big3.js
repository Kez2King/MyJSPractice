/**
 * Write a function that takes in an array of at least 3 integers
 *      - w/out sorting return the 3 biggest numbers
 *      - New array should be sorted
 *      - Can return duplicates
 */

function threeLargeNumbers(num){
    let num1 = null;
    let num2 = null;
    let num3 = null;

    for(let i = 0; i < num.length; i++){
        if(num[i] >= num3 || !num2){
            num1 = num2
            num2 = num3
            num3 = num[i]
        } else if(num[i] >= num2 || !num2) {
            num1 = num2
            num2 = num[i]
        } else if(num[i] >= num1 || !num1) {
            num1 = num[i]
        }
    }
    return [num1, num2, num3]
}

console.log(threeLargeNumbers(124, 66, 3, 22, 99, 100));
function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b)=> a-b)
    let first = arr.shift()
    let max = arr.reduce((a, b) => a + b)
    
    arr.unshift(first)
    let min = arr.splice(0, arr.length-1).reduce((a,b) => a + b)
    console.log(min , max)
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [50 ,75, 100, 23, 2]

miniMaxSum(arr1)
miniMaxSum(arr2)
function plusMinus(arr) {
    // Write your code here
    let positive = 0
    let negative = 0
    let zeros = 0
    
    for(let i=0; i < arr.length; i++){
        switch (0 < arr.length <= 100 && -100 <= arr[i] <= 100){
            case (arr[i] > 0):
                positive++
                break;
            case (arr[i] < 0):
                negative++
                break;
            default:
                zeros++
                break;
        }
    }
    let totalP = (positive / arr.length).toFixed(6)
    let totalN = (negative / arr.length).toFixed(6)
    let totalZ = (zeros / arr.length).toFixed(6)
    console.log("Your Positives: " + totalP)
    console.log("Your Negatives: " + totalN)
    console.log("Your Zeros: " + totalZ)
}

let arr1 = [-4, -3, 0 , 1, 2, 3]
let arr2 = [-50, -4, 0, 0, 1, 2, 3]

plusMinus(arr2)
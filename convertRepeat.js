// 1. make sure we can step through each letter - done
// 2. make sure we can switch letters - done
// 3. count the number of repenting values - done
// 4. break out 10th duplicate letter and restart count

function compile(string){
    let count = 1
    let tenthcount = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] == string[i+1]){
            if(count >= 9){
                tenthcount ++
            } else {
                count ++
            }
        } else {
            if (tenthcount == 0) {
                console.log(count + string[i]);
            } else{
                console.log((count + string[i]) + (tenthcount + string[i]));
            }
            count = 1
            tenthcount = 0
        }
    }
}

let string = "AAAAAAAAAAAABBBBBBBBBBCCCDEEE"
compile(string)
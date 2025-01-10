export function sum(a: number, b: number) {
    return a + b;
}

const sumAns = sum(2, 4)
if(sumAns == 6){
    console.log("Test Pass")
}else{
    console.log("Test Failed")
}
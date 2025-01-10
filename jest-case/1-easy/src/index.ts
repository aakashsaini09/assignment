
export function sum(a: number, b: number) {
    return a + b;
}
const test1 = sum(1, 3)
if(test1 == 4){
    console.log("test Passed");
}else{
    console.log("test Failed");
}
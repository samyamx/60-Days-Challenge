function myf(){
    console.log("hii");
    console.log("colaa");
}
myf();
myf();

function s(msg){
    console.log(msg);
}
s("Hero ko dai");

function add(a,b){
    console.log(a+b);
}
add(3,3);
 
function sum(x,y){
   s=x+y;
    return s;

}
let result = sum(5,6);
console.log("sum=",result);

function sum(a,b){
    return a+b;
}

const arrowsum =(a,b) => {
    console.log("sum=", a+b);
}

function countVowels(str){
    let count = 0;
    for(const char of str){
        if (
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'    
        ){
            count++;
        }
    }
        return count;
    

}


const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if (
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'    
        ){
            count++;
        }
    }
    
    return count;
}

let arr= ["ktm", "bkt", "patan"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

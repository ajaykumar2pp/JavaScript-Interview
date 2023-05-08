// Vowels Count in a string


let str ="hello coderbyte";
let arr=str.split("")
var vowels = [a,e,i,o,u];
let count =0;
for(var i=0;i<arr.length;i++){
    if(vowels.indexOf(arr[i]!==-1)){
        count+=1;
    
    }
}
count++;
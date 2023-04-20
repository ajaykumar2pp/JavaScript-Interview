// Input : ajay kumar
// Output : AJAY KUMAR

function LetterCapital(str){
    let word = str.split("");
    for(var i=0;i<word.length;i++){
        word[i] = word[i].substr(0,1).toUpperCase() + word[i].substr(1)
    }
   return word.join("")
}
LetterCapital("ajay kumar")
console.log(LetterCapital("ajay kumar"))
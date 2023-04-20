// Input : 500
// Output : 8:20

let time = 500;
let hour = Math.floor(time/60)
console.log(hour +" " +"hour")
let minutes = time%60;
console.log(minutes +" " +"minutes");
let HM = hour +" " +"hour"+":"+minutes +" " +"minutes" ;
console.log(HM)
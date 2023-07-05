const myData = document.querySelector("#myData")

// myData.innerHTML=`Full Stack Web Developer`


function startTimer(){
    console.log("click")
    myData.innerHTML=`Lodaing Data ............`
    setTimeout(()=>{
        myData.innerHTML=`Full Stack Web Developer`
    },2000)
}
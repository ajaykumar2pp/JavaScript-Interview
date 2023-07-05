const parentId = document.getElementById('parentId')
const childId = document.getElementById('childId')


const parentCall =()=>{
    console.log("Parent div call")
}
const childCall =()=>{
    console.log("Child Div Call")
    // event.stopPropagation();
}


parentId.addEventListener('click',parentCall,true)
childId.addEventListener('click',childCall,true)

// This is a eventcapturing
// Crud operation perform in array ...
//  Create 
// Read 
// Update 
// Delete

let name = ["Ajay","vijay","sagar","raja"]
console.log(name)

// Add new name in array  

const myName =name.splice(name.length,0,"Manu")
console.log(name)

// update name Ajay to Shivam
const mName = name.splice(0,1,"Shivam")
console.log(name)

// delete  name sagar

const vName = name.splice(2,1)
console.log(name)

//  How to flatten an array
// Converting 2d and 3d aray into one Dimensional array

const arr = [
    ['Ajay1','Ajay2'],
    ['Ajay3','Ajay4'],
    ['Ajay5','Ajay6'],
    ['Ajay7',['Tanu1', 'Tanu2']],
]

// const flatArray = arr.reduce((accum, curVal)=>{
//     return  accum.concat(curVal[0])
// })

//  console.log(flatArray)

// const flatArray= arr.flat(2);
const flatArray= arr.flat(Infinity);
console.log(flatArray)
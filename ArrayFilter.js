const data =[
    {name:"ajay", age:20},
    {name:"vijay",age:30},
    {name:"raja" , age:null},
    {name:"sagar",age:undefined},
    {name:null, age:undefined}
]

const newAge = data.filter((elem)=>{
    return elem.age !=undefined;
})

console.log(newAge)
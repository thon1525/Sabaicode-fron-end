const arraydata=[
  {id: 1,
    name: "thon",
 
  }
]
let newarrray=0;
arraydata.map((data)=>{
  const {id,name,pric}=data;
  newarrray.push(data.id)
});
console.log(newarrray)
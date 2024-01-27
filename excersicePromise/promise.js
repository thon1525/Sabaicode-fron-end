const newpromise=new Promise((resolve, reject)=>{
const one=true;
if(one==true){
    resolve("Operation succeeded!");
}else{
    reject("Operation failed!");
}
});

newpromise.then((showture)=>{
console.log(showture)
})
newpromise.catch((showfails)=>{
    console.log(showfails);
})
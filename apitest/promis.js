const datashow=new Promise((resolve, reject)=>{
const nomay= false;
if(nomay==false){
    resolve(nomay);
}
else{
    reject('true')
}
});

Promise.resolve(datashow)
    .then((msg) => {
        console.log('Resolved:', msg);
    })
 
    .catch((err) => {
        console.error('Rejected:', err);
    })
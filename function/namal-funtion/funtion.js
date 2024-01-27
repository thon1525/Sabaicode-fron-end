const data=[123,34,6,5,4,4,4,4,4];
const findexdsata=data.findIndex((item,index)=>{
    sumindex(index)
});

const sumindex=(index)=>{
    let sum=0;
    for(let i=0;i<index.length;i++){
        sum+=index[i];
    }
   console.log(sum)
}
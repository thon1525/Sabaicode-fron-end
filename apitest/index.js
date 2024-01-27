

//   async function dataapi(){
//       try{
//          const showdata= await fetch('https://jsonplaceholder.typicode.com/photos');
//          const datafetch=await showdata.json();
//          const slicedata=datafetch.slice(0,9);
//          slicedata.map((item)=>{
//             const { id, title, url, thumbnailUrl } = item;
//              console.log(id)

//          });

//       }catch(err){

//       }
//   }

//   dataapi()



async function fetchdata(url){
    try{
        const respones = await fetch(url);
        const result= await respones.json()
        const litmitresult= result.slice(0,10);
        console.log(litmitresult)
    }catch(er){
        console.error(er);
    }
}

async function listfetchdata(){
    const dataurl='https://jsonplaceholder.typicode.com/photos';
    const showdatafech= await fetchdata(dataurl)
}
listfetchdata()

const btn_previous=document.getElementById('btn_previous');
btn_previous.addEventListener("click",()=>{

});

const btn_next=document.getElementById('btn_next');
btn_next.addEventListener(()=>{
    
})

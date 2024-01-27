function letters(text){
    let str = text
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j< str.length; j++){
            if(str[i] > str[j]){
                // Swap characters
                let temp=str[i];
                str[i]=str[j];
                str[j]=temp;
            }
        }
    console.log('result', str)

    }
    return str;
}
 const text="54721";

 const result= letters(text);
 console.log(result);

 console.log(text[0] > text[1])
 text[0] = text[2]
 console.log(text);
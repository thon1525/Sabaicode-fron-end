class Library {
    constructor(name,hello){
        this.name=name;
        
    }
    methoddata(name){
      console.log(name)
    }
}
class Book{
     constructor(data){
        this.data=data;
     }
}

const mylibrary= new Library("hello");
mylibrary.methoddata("thon")
console.log(mylibrary)

// parent class
class Person { 
  constructor(fetchdata) {
      this.fetchdata =88;
    
  }
//you add fech data




}

// inheriting parent class
class Student extends Person {
  constructor(fetchdata) {

    super(fetchdata);
  }
  

thon(){
const datashow=this.fetchdata;
console.log(datashow)
}

}

let student1 = new Student();
// student1.fetchdatamethod();

student1.thon()

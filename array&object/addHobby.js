const userProfiles = [
    {
      name: 'Alice',
      age: 25,
      hobbies: ['Reading', 'Hiking', 'Painting']
    },
    {
      name: 'Bob',
      age: 30,
      hobbies: ['Reading', 'Gaming', 'Cooking']
    },
    {
      name: 'Charlie',
      age: 22,
      hobbies: ['Traveling', 'Photography', 'Music']
    },
    {
      name: 'David',
      age: 28,
      hobbies: ['Running', 'Watching Movies', 'Fishing']
    },
    {
      name: 'Eva',
      age: 35,
      hobbies: ['Yoga', 'Writing', 'Dancing']
    }
  ];
  
 // Function to add hobbies to a user's profile
  function addHobby(userIndex, newHobbies) {
    if (userIndex >= 0 && userIndex < userProfiles.length) {
      userProfiles[userIndex].hobbies = userProfiles[userIndex].hobbies.concat(newHobbies);
      console.log(`Hobbies added to ${userProfiles[userIndex].name}'s profile:`, userProfiles[userIndex].hobbies);
    } else {
      console.log('Invalid user index.');
    }


  }

  function adddata(index,newdata){
    if(index>=0&&index<userProfiles.length){
        userProfiles[index].hobbies=userProfiles[index].hobbies.push(newdata);
        console.log(userProfiles[index].hobbies);
    }
  }
  
  // Example usage: Add new hobbies to Alice's profile (userIndex = 0)
  addHobby(0, ['Biking', 'Photography']);
  
function adddata(index,adddata){
  if(index>0&&index<userProfiles.length){
    userProfiles[index].hobbies=userProfiles[index].hobbies.push(adddata);
    console.log(userProfiles[index].hobbies)

  }
}
// function getProfileDetails(profile) {
//     // Directly extract name and age using object destructuring
//     const { hobbies } = profile;
// let arr=[]
//      for(let i=0;i<hobbies.length;i++){
//        arr+=hobbies[i]
//      }
//     hobbies.push("reading");
// console.log(`Name: ${arr}`);
    
//   }
 

//   for (const user of userProfiles) {

//     getProfileDetails(user)
// }



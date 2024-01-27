const userProfiles = [
    {
      name: 'Alice',
      age: 25,
      hobbies: ['Reading', 'Hiking', 'Painting']
    },
    {
      name: 'Bob',
      age: 30,
      hobbies: ['Coding', 'Gaming', 'Cooking']
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
  
//   function getFirstHobby(profile) {
//     const [firstHobby] = profile.hobbies;
//     return firstHobby;
//   }
  
//   const aliceHobbies = userProfiles[0].hobbies;
//   console.log(aliceHobbies);


  function getProfileDetails(profile) {
    // Directly extract name and age using object destructuring
    const { hobbies} = profile;
    
console.log(`Name: ${hobbies}`);
    
  }
 

  for (const user of userProfiles) {

    getProfileDetails(user)
}

  
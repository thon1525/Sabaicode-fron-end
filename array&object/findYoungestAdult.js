const userprofile = [
    {
        name: "sok",
        age: 18,
        hobbies: ["read", "sleep", "write coding"]
    },
    {
        name: "sokthy",
        age: 13,
        hobbies: ["shopping online", "gamer", "watching"]
    },
    {
        name: "sokdavy",
        age: 22,
        hobbies: ["Painting", "Coding", "Playing Music"]
    },
    {
        name: "pov",
        age: 16,
        hobbies: ["learning", "sport", ""]
    },
    {
        name: "konpov",
        age: 20,
        hobbies: ["learning", "sport", ""]
    },
];

// function findYoungestAdult(profiles) {
//     const adults = profiles.filter(user => user.age > 18);

//     if (adults.length === 0) {
//         console.log("No adults found.");
//         return null;
//     }

//     const youngestAdult = adults.reduce((youngest, current) => {
//         return (current.age < youngest.age) ? current : youngest;
//     });

//     console.log("Youngest Adult:", youngestAdult);
//     return youngestAdult;
// }

// findYoungestAdult(userprofile);


function getProfileDetails(profile) {
    // Print name and age from the profile
    const { name, age } = profile;
    if(age<18){
        console.log(`youngest: ${name}, Age: ${age}`);
    }else{
        console.log(`Adult: ${name}, Age: ${age}`);
    }

  }
  
  // Filter users based on some criteria (e.g., age greater than 25)
  const filteredUsers = userprofile.filter(user => user.age < 18);
  
  // Display details of filtered users
  filteredUsers.reduce(user => getProfileDetails(user));

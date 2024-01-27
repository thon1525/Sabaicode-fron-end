const userprfile=[
    {
    name:"sok",
    age:19,
    hobbies: ["read","sleep","write coding"]
},
{
    name:"sokthy",
    age:19,
    hobbies: ["shopping online","gammer","watching"]
},
{
    name:"sokdavy",
    age:19,
    hobbies: ["Painting", "Coding", "Playing Music"]
},
{
    name:"pov",
    age:19,
    hobbies: ["learnig", "sport", ""]
},
{
    name:"konpov",
    age:19,
    hobbies: ["learig", "sport", ""]
},
]

function getProfileDetails(profile) {
    // Directly extract name and age using object destructuring
    const { name, age } = profile;
console.log(`Name: ${name}, Age: ${age}`);
    
  }
 

  for (const user of userprfile) {

    getProfileDetails(user)
}


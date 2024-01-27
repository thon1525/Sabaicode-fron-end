const userprfile=[
    {
    name:"sok",
    age:18,
    hobbies: ["read","sleep","write coding"]
},
{
    name:"sokthy",
    age:13,
    hobbies: ["shopping online","gammer","watching"]
},
{
    name:"sokdavy",
    age:22,
    hobbies: ["Painting", "Coding", "Playing Music"]
},
{
    name:"pov",
    age:16,
    hobbies: ["learnig", "sport", ""]
},
{
    name:"konpov",
    age:20,
    hobbies: ["learig", "sport", ""]
},
]

function mapHobbies(profiles){
    return profiles.map(profile => {
        const { name, hobbies } = profile;
        const hobbiesString = hobbies.join(', ');
        return `Name: ${name}, Hobbies: [${hobbiesString}]`;
      });
}
 console.log(mapHobbies(userprfile));

// Displaying names from userprofile
// for (const userprofile of userprofile) {
//     console.log(userprofile.name);
// }

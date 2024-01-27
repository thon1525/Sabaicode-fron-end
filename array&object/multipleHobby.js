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

function sabfunction(name, ...additionalHobbies) {
    const profileIndex = userProfiles.findIndex(person => person.name === name);
    console.log(profileIndex)
    if (profileIndex !== -1) {
        userProfiles[profileIndex].hobbies.push(...additionalHobbies)

        console.log(userProfiles[profileIndex]);
    } else {
        console.log(`User with name ${name} not found.`);
    }
}

sabfunction('Eva', 'play', 'soccer', 'swimming');

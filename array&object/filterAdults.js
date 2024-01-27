function filterAdults(profiles){
   return profiles.filter(profile => profile.age >= 18);
}

const userProfiles = [
    { name: 'sok', age: 25 },
    { name: 'tha', age: 17 },
    { name: 'sokny', age: 30 },
    // Add more user profiles as needed
  ];
  const adults = filterAdults(userProfiles);
console.log(adults);
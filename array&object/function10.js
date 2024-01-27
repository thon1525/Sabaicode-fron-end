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

// Function to update user attributes dynamically
function updateUserProfile(name, newAttributes) {
    const userIndex = userprofile.findIndex(user => user.name === name);

    if (userIndex !== -1) {
        userprofile[userIndex] = { ...userprofile[userIndex], ...newAttributes };
        return userprofile[userIndex];
    } else {
        console.log(`User '${name}' not found.`);
        return null;
    }
}

// Example usage:
const updatedUserProfile = updateUserProfile("sok", { age: 12, occupation: 'student', hobbies: ["play tennis"] });

//update 

if (updatedUserProfile) {
    console.log("Updated User Profile:", updatedUserProfile);
} else {
    console.log("User not found. No profile updated.");
}

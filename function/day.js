let dayNum= 3; // Assuming 1 is Monday, 2 is Tuesday, and so on...
daynumber(dayNum);

function daynumber(dayNumber){
  switch (dayNumber) {
    case 1:
      console.log("It's Monday. Start of the week!");
      break;
    case 2:
      console.log("It's Tuesday. Getting into the groove.");
      break;
    case 3:
      console.log("It's Wednesday. Halfway through!");
      break;
    case 4:
      console.log("It's Thursday. Almost there!");
      break;
    case 5:
      console.log("It's Friday. Ready for the weekend!");
      break;
    case 6:
      console.log("It's Saturday. Time to relax!");
      break;
    case 7:
      console.log("It's Sunday. Take it easy!");
      break;
    default:
      console.log("Not a valid day number.");
  }
}
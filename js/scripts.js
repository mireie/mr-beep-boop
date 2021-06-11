function mrBeepBoop(input) {
  const matchArray = [0,"Beep!","Boop!","Won't you be my neighbor?"];
  let outputArray = [];
  if (input === 0) {
    outputArray = matchArray[0];
  } else if (input === 1) {
    outputArray = matchArray[1];
  } else if (input === 2) {
    outputArray = matchArray[2];
  } else if (input === 3) {
    outputArray = matchArray[3];
  }
  return outputArray;
}
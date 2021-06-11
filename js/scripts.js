function mrBeepBoop(input) {
  const matchArray = [0,"Beep!","Boop!","Won't you be my neighbor?"];
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i <=3) {
      outputArray.push(matchArray[i]);
    } else 
      outputArray.push(i);
  }
  return outputArray;
}
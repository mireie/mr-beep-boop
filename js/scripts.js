function mrBeepBoop(input) {
  const matchArray = [0,"Beep!","Boop!","Won't you be my neighbor?"];
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (numContains(i) > 0) {
      outputArray.push(matchArray[numContains(i)]);
    } else 
      outputArray.push(i);
  }
  return outputArray;
}

function numContains(index) {
  let indexArray=[];
  let indexString=index.toString();
  indexArray = indexString.split("");
  for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === "3") {
      return 3;
    } else if (indexArray[i] === "2") {
      return 2;
    } else if (indexArray[i] === "1") {
      return 1;
    } else {
      return 0;
    }
  }
}
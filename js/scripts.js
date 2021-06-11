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
function numContains(index) {
  let indexArray=[];
  let indexString=index.toString();
  let check1 = false;
  let check2 = false;
  let check3 = false;
  indexArray = indexString.split("");
  for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === "3") {
      check3 = true;
      break;
    } else if (indexArray[i] === "2") {
      check2 = true;
    } else if (indexArray[i] === "1") {
      check1 = true;
    }
  }
  if (check3 === true) {
    return 3;
  } else if (check2 === true) {
    return 2;
  } else if (check1 === true) {
    return 1;
  } else {
    return 0;
  }
}
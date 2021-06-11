//Business Logic
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
  let check3 = false;
  let check2 = false;
  let check1 = false;
  indexArray = indexString.split("");
  for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === "3") {
      check3 = true;
    } else if (indexArray[i] === "2") {
      check2 = true;
    } else if (indexArray[i] === "1") {
      check1 = true;
    } else {
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

//Interface logic
$(document).ready(function() {
  let outputArray = [];
  $('form#form').submit(function(event) {
    event.preventDefault();
    if (parseInt($('#userNumber').val()) > 1000000) {
      $('p#output').text("That's a little much, don't you think? Try again with a smaller number or Mr. Beep Boop might explode your browser.");
    } else {
      outputArray = mrBeepBoop(parseInt($('#userNumber').val()));
      $('p#output').text(outputArray.join(", "));
      $('#result').show();
    }
  });
})
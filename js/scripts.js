//Business Logic

function mrBeepBoop() {
  let matchArray = [];
  if (arguments[1] === 1) {
    matchArray = [0, arguments[2], arguments[3], arguments[4]];
  } else if (arguments[1] === 0) {
    matchArray = [0, "Beep!", "Boop!", "Won't you be my neighbor?"];
  }
  let outputArray = [];
  for (let i = 0; i <= arguments[0]; i++) {
    if (numContains(i) > 0) {
      outputArray.push(matchArray[numContains(i)]);
    } else
      outputArray.push(i);
  }
  return outputArray;
}

function numContains(index) {
  let indexArray = [];
  let indexString = index.toString();
  let check3 = false;
  let check2 = false;
  let check1 = false;
  indexArray = indexString.split("");
  indexArray.forEach(function (element) {
    if (element === "3") {
      check3 = true;
    } else if (element === "2") {
      check2 = true;
    } else if (element === "1") {
      check1 = true;
    } else { }
  });

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

//Interface Logic

$(document).ready(function () {
  let outputArray = [];
  $('#advanced').click(function () {
    $('.advanced').slideToggle();
    if ($('#advanced').is(":not(:checked)")) {
      $("#text1, #text2, #text3").prop('required', false);
    } else if ($('#advanced').is(":checked")) {
      $("#text1, #text2, #text3").prop('required', true);
    }
  });
  $('form#form').submit(function (event) {
    event.preventDefault();
    $("#result h2").text("Mr. Beep Boop works his magic and returns:")
    const userNumber = parseInt($('#userNumber').val());
    const text1 = $('#text1').val();
    const text2 = $('#text2').val();
    const text3 = $('#text3').val();
    if (userNumber > 1000000) {
      outputArray = ["That's a little much, don't you think? Try again with a smaller number or Mr. Beep Boop might explode your browser."];
    } else if (userNumber < 0) {
      outputArray = ["I bet you think you're pretty clever, huh? Try again with a positive integer. And not too beeping big, ya hear me, boop?"];
    } else {
      if ($('#advanced').is(":not(:checked)")) {
        outputArray = mrBeepBoop(userNumber, 0);
      } else if ($('#advanced').is(":checked")) {
        outputArray = mrBeepBoop(userNumber, 1, text1, text2, text3)
      }
    }
    $('p#output').text(outputArray.join(", "));
  });
  $('.input-hide').click(function() {
    if ($('form').is(':hidden')) {
      ($('#input-text')).text("Hide");
    } else {
      ($('#input-text')).text("Show");
    }
    $('form').slideToggle();
  });
})
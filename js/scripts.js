//BDD transcription (From my notebook)
//program replaces 0 with beep
//sample input: 0, sample outout "Beep"
//program replaces 1 with Boop
//sample input: 1, sample output "boop"
//program replaces numbers containing a 1 with Boop
//sample input: 11, sample output: "boop"
//program replaces numbers containing a 0 with beep
//sample input:20, sample output: "beep"
//program replaces numbers divisible by 3 with "I'm sory Dave..."
//sample input: 6, sample output: "I'm sory Dave..."
//program returns all other numbers as intended
//sample input: 22, sample output: 22

//Front End
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#input").val());
    $('#output').text(beepBoop(inputNumber));
  });
});

//back end
function beepBoop(inputNumber) {
  var createArray = []
    for (var i = 0; i <= inputNumber; i++) {//creates for loop that scans entirety of inputNumber
      if (i % 3 === 0 && i !== 0) {//creates response for numbers divisible by 3
        createArray.push(" I'm sorry, Dave, I'm afraid I can't do that");
      }
      else if (i.toString().split("").includes("1")) {//creates responses for numbers that contain 1, converts number to string, into array. then searches array
        createArray.push(" Boop!");
    }
      else if (i.toString().split("").includes("0")) {//creates responses for numbers that contain 0
      createArray.push(" Beep!");
      }
      else {//creates response for all other numbers in sequence
      createArray.push(" " + i);
      }
  }
  return createArray
}

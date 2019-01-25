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
    for (var i = 0; i <= inputNumber; i++) {
      if (i % 3 === 0 && i !== 0) {
        createArray.push(" I'm sorry, Dave, I'm afraid I can't do that");
      }
      else if (i.toString().split("").includes("1")) {
        createArray.push(" Boop!");
    }
      else if (i.toString().split("").includes("0")) {
      createArray.push(" Beep!");
      }
      else {
      createArray.push(" " + i);
      }
  }
  return createArray
}

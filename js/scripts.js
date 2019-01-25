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
      if (i % 3 === 0) {
        createArray.push("Sorry Dave, I can not do that");
      }
      return createArray
    }
}

//if (inputNumber.includes("0")) {
//  alert("beep");
//}
//else if (inputNumber.includes("1")) {
//  alert("boop")
//}
//else if (parseInt(inputNumber) % 3 === 0) {
//  alert("sorry")
//}

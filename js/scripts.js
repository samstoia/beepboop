//Front End
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#input").val());
    $('#output').text(beepBoop(inputNumber));
  });
});



//if (inputNumber.includes("0")) {
//  alert("beep");
//}
//else if (inputNumber.includes("1")) {
//  alert("boop")
//}
//else if (parseInt(inputNumber) % 3 === 0) {
//  alert("sorry")
//}

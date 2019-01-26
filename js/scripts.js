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
  var newArray = []
  for (var i = 0; i <= inputNumber; i++) {
    if (inputNumber.toString().split().includes("0")) {
    newArray.push(" boop ")
    }
    else if (inputNumber.toString().split().includes("1")) {
    newArray.push(" Beep ")
    }
    else if (i % 3 === 0 && i !== 0) {
    newArray.push("i'm sorry dave ")
    }
    else {
      newArray.push(i);
    }

  }
  return newArray

}

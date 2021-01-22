let array = [0,1,2,3];
array.forEach(function(num) {
  if (num === "1") {
    alert("hi");
  }
})

//User Interface Logic:
$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = parseInt($('#num').val());
    let return = beepBoop(user);
    $('.confirmation').show;
  });
})
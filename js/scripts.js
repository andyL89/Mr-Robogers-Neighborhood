function beepBoop(num) {
  if (num )
}

//User Interface Logic:
$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = parseInt($('#num').val());
    let return = beepBoop(user);
    $('.confirmation').show;
  });
})
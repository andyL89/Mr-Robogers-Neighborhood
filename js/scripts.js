function beepBoop(num) {
  let response;
  if (num === 1) {
    response = 'Beep!';
  } if (num === 2) {
    response = 'Boop!';
  } if (num === 3) {
    response = "Won't you be my neighbor?"
  }  
  return response;
}

//User Interface Logic:
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let user = parseInt($('#num').val());
    let response = beepBoop(user);
    $('.alert').text(response);
  });
})
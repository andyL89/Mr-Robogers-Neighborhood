function beepBoop(num) {
  let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  array [1] = "Beep!";
  array [2] = "Boop!";
  array [3] = "Won't you be my neighbor?";
  let response = [];
  for (let index = 0; index <= num; index +=1) {
    response.push(array[index]);
  } if (num == '1') {
    response = "Beep!";
  } if (num == '2') {
    response = "Boop!";
  } if (num == '3') {
    response = "Won't you be my neighbor?"
  } 
  return response;
}

//User Interface Logic:
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let user = $('#num').val();
    let response = beepBoop(user);
    $('.alert').text(response);
  });
})
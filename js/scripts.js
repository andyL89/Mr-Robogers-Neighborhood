const Beep = "Beep!"
const Boop = "Boop!"
const Wont = "Won't you be my neighbor?"

let beepBoop = function (num) {
  let array = [];
  for (let index = 0; index <= num; index++) {
    array.push(index.toString());
  };



$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let user = parseInt($('#num').val());
    let response = beepBoop(user);
    $('.alert').text(response);
  });
});
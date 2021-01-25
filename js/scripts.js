let beepBoop = function (num) {
  let array = [];
  for (let index = 0; index <= num; index++) {
    array.push(index.toString());
  };

  let answer = array.map(function (input) {
    if (input.includes("3")) {
      return  "Won't you be my neighbor?";
    } else if (input.includes("2")) {
      return "Boop";
    } else if (input.includes("1")) {
      return "Beep";
    } else {
      return input;
    };
  });
  return answer;
};



$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let user = parseInt($('#num').val());
    let response = beepBoop(user);
    $('.alert').show();
    $('.alert').text(response);
  });
  
  $('.clickable').click(function () {
    $('.alert').toggle();
  })
});
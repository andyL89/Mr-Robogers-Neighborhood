

//User Interface Logic:
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let user = parseInt($('#num').val());
    $(".num").text(user);
    $('.confirmation').show();
  });
})
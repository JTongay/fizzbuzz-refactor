$(function () {
  $(document)
    .on('click', '#submit', addNum)
    .on('click', '#clear', clearNum);

  function addNum() {
    event.preventDefault();
    var inputNum = $('#text-box').val();
    inputNum = parseInt(inputNum, 10);
    if ((inputNum % 1 == 0) && (inputNum >= 1) && (inputNum <= 100)) {
      fizzBuzz(inputNum);
    } else {
      alert("You have to enter a number between 1 and 100!");
      $('#text-box').val('');
    }
  }

  function clearNum() {
    $('section').empty();
    $('#text-box').val('');
  }

});




function fizzBuzz(max) {
  for (var i = 1; i <= max; i++) {
    console.log(i);
    if (i % 3 === 0) {
      console.log('fizz');
      $('section').append('fizz').append('<br>');
    } else if (i % 5 === 0) {
      console.log('buzz');
      $('section').append('buzz').append('<br>');
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzbuzz');
      $('section').append('fizzbuzz').append('<br>');
    } else {
      console.log(i);
      $('section').append(i).append('<br>');
    }
  }
};

$(function () {
  $(document)
    .on('click', '#submit', addNum)
    .on('click', '#clear', clearNum)
    .on('keydown', '#text-box', enterKey)
    .on('keydown', '#text-box', clearKey);
  //adds number in textbox
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
  //clears game
  function clearNum() {
    $('section').empty();
    $('#text-box').val('');
  }
  //enter key functionality
  function enterKey(event) {
    if (event.keyCode === 13) {
      addNum(event);
      $('#text-box').val('');
    }
  }
  //escape key functionality
  function clearKey(event) {
    if (event.keyCode === 27) {
      clearNum(event);
      $('text-box').val();
    }
  }

});



//fizzbuzz function
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

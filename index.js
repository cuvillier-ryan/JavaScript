// JavaScript Refreshment.

function isLeap(year) {
  //this is a test

  function isLeap(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return "Leap year."
    }
    return "Not leap year."
  }
}

function isLeapToo(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

//Basic array fizzBuzz

var output = [];
var count = 1;

let fizzBuzz = function(){

    if(count % 3 === 0 && count % 5 === 0){
        output.push("Fizz Buzz");
    } else if(count % 3 === 0){
        output.push("Fizz");
    } else if(count % 5 === 0 ){
        output.push("Buzz");
    } else {
        output.push(count)
    }

    count++
    console.log(output);
}

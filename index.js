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

//Basic FizzBuzz

// var output = [];
// var count = 1;
//
// let fizzBuzz = function(){
//
//     if(count % 3 === 0){
//         output.push("Fizz");
//     } else if(count % 5 === 0){
//         output.push("Buzz");
//     } else if(count % 3 === 0 && count % 5 === 0){
//         output.push("Fizz Buzz");
//     } else {
//         output.push(count);
//     }
//
//
//     count++
//     console.log(output);
//
// }

let fizzBuzz = function() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//Test
// Test

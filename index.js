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

//FizzBuzz while loop

var output = [];
var count = 1;

let fizzBuzz = function() {

  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count)
    }

    count++
  }
  console.log(output);
}

// FizzBuzz For Loop

var output = [];

let fizzBuzz = function() {

  for(var count = 1; count <= 100; count++) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count)
    }
  }
  console.log(output);
}


//Test

// Random person selector

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!"

}

// 99 bottles of beer on the wall

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


// Fibonacci Sequence Generator

function fibonacciGenerator(n) {

    var output = [];
    if(n === 1){
        output = [0];
    }
    else if(n === 2){
        output = [0, 1];
    }
    else {
        output = [0, 1];

        for(var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length -1]);
        }

    }
    return output;
}

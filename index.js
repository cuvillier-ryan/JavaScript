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

function isLeapToo(year){
  if(year % 4 === 0) {
    if(year % 100 === 0){
      if(year % 400 === 0) {
        return "Leap year.";
      }else {
        return "Not leap year.";
      }
    }else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

// Test

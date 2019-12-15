if (a == 2) {
  // do something
}
else if (a == 10) {
  // do another thing
}
else if (a == 42) {
  // do yet another thing
}
else {
  // fallback to here......
}

// switch statements

switch (a) {
  case 2:
    // do something
    break;
  case 10: 
    // do another thing
    break;
  case 42:
    // do yet another thing
    break;
  default:
    // fallback to here     
}

// The break is important if you want only the statement(s)
// in one case to run. If you omit the break from a case, and that 
// case matches or runs, execution will continue with the next case's
// statements regardless of that case matching.

// "fallthrough" switch
switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 42:
    // other stuff
    break;
  default:
    // fallback    
}

// ternary operator
const a = 42;

const b = (a > 41) ? "hello" : "world";
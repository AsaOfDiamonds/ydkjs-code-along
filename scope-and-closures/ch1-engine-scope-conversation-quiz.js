function foo(a) {
  var b = a;
  return a + b;
}

var c = foo( 2 );

// 1. Identify all the LHS look-ups(there are 3!).
// 2. Identify all the rHS look-ups(there are 4!).
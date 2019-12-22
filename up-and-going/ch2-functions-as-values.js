function foo() {
  // whatevs
};

// value of foo is an anonymous function
const foo = function() {
 // whatevs
};

// named function expression
const x = function bar() {
  // whatevs
};

// IIFEs immediately invoked Function Expressions
(function IIFE(){
  console.log( "Hello" );
})();

function foo() {

}
// foo function reference expression,
// then '()' executes it
foo ();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){})();
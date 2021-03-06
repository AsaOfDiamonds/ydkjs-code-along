function makeAdder(x) {
  // parameter x is an inner variable

  // inner function `add()` uses `x`, so
  // it has closure over it

  function add(y) {
    return y + x;
  };
return add;

}

// `plusOne` gets a reference to the inner `add(..)`
// function with the closure over the `x` parameter of
// the outer `makeAdder(..)`

const plusOne = makeAdder(1);

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder`

const plusTen = makeAdder(10);

console.log(plusOne(3));
console.log(plusOne(41));

console.log(plusTen(13)); 
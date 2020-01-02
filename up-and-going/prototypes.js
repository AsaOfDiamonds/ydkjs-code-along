const foo = {
  a: 42
};

// create bar and link it to `foo`
const bar = Object.create( foo );

bar.b = "hello world";

bar.b; // "hello world"

bar.a; // 42 <--- delegated to `foo`

console.log(bar.b);
console.log(bar.a)

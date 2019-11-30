const a = 2;

foo(); // works because `foo()`
       // declaration is hoisted
       
function foo() {
  a = 3;

  console.log(a); //3 

  var a; // declaration is "hoisted"
         // to the top of `foo()`

}

console.log(a); // 2 

// What happens if we try with an arrowfunction?

// const a = 2;

// // foo(); // does not work, 
//           // does not appear to be hoisted
//           // foo is not defined
       
// let foo = () => {
//   a = 3;

//   console.log(a); // if comment out foo above will not console log

//   var a; // declaration is "hoisted"
//          // to the top of `foo()`

// }

// console.log(a); // 2 

// I hope everyone had a wonderful thanksgiving

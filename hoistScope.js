// var, let and const keywords explained
/* 
   --VAR
     Declares a variable which is scoped to its current execution context, optionally initializing to a value

   --LET
     Declares a block scoped variable, optionally initializing it to a value
   
   --CONST
     Declares constants which are block scoped and creates  a read only reference to a value.


*/

// HOISTING
/* 
   Conceptually, hoisting suggests that variables function declarations are physically moved to the top of your code. 
   Technically, what happens is that the variable and function declarations are put into memory during the compilation phase but stay exactly where you typed them in code.
   The primary importance of hoisting is that it allows you to use functions BEFORE you declare them in code.
*/

/* 
   In javascript, all variables defined with the 'var' keyword have an initial value of 'undefined'.
   This is due to hoisting, which puts the variable declarations in memory and initializes them with the value of 'undefined'.
*/

console.log(x); // undefined
console.log(y);// ReferenceError: y is not defined
var x = 5;

/* 
   Variables defined with 'let' and 'const' keywords when hoisted are not initialized with the value of 'undefined'. Rather, they are in state called the "Temporal Dead Zone" and are not initialized until their definitions are evaluated.
*/

console.log(x);// throws ReferenceError: x is not defined
let x =1;

// SCOPE
/* 
      Variables defined with the 'var' keyword have a scope that is its current execution context.
      They can be accessed outside the block they were defined, provided that it's still within the scope of its execution context.
      'let' and 'const' variables, however, are block scoped and cannot be accessed from outside the block.
*/

 (function(){
      var x = 2;
      let y = 3;
      const z = 4;
   if(true){
      console.log(x); // 2 
      console.log(y); // ReferenceError: y is not defined --out of scope;
      console.log(z); // ReferenceError: z is not defined --out of scope;
   }
     console.log(x); // 2
     console.log(y); // ReferenceError: y is not defined --out of scope;
     console.log(z); // ReferenceError: z is not defined --out of scope;
    
 }());

 console.log(x); //ReferenceError: x is not defined --out of scope;

 // Also bear in mind, when you declare a variable but assign a value to the variable, the variable gets created and it's attached to the global execution context ('window' in browser, 'global' in node). This is NOT the case with global variables declared with 'let' and 'const'.

 // Possible issues to bear in mind
 /* 
      When you don't declare a variable but assign a value to it, the variable gets created and assigned to the global execution context. 
      e.g
 */

 str = "this string is gonna be attached to the global context ('window')";
 console.log(this.str); // prints the above value

 // this is STRONGLY advised against, as it makes debugging difficult. e.g

 x = "this gets attached to the global this";
 console.log(this.str); // undefined

 function testFn(){
    y = "this also gets attached to the global this";
    console.log(this.y); // prints value of y. 'this' here refers to 'window;
 }

 console.log(testFn()); // undefined

 // Also
 /* 
   Variables declared with the 'var' keyword can be declared at any point in the code (even within the same execution context).
   This is NOT the case for variables defined with the 'let' and 'const' keywords as they can only be declared once within their lexical scope.
   e.g
 */
var x = 1;
var x = 2;
console.log(x); // 2
let y = 1; // SyntaxError: identifier y has already been declared
let y=2; // SyntaxError: identifier y has already been declared
const z = 1; // SyntaxError: identifier has already been declared
const z = 2;  // SyntaxError: identifier has already been declared

// This can be a problem when you use 'switch' cases e.g

var x =1;
switch(x){
   case 0:
      let foo = 20; //  SyntaxError: identifier 'foo' has already been declared

      break;
   case 1:
      let foo = 30; // SyntaxError: identifier 'foo' has already been declared

      break; 
}

// of course the above issue can be avoided by using curly braces

  var num = 2;
  switch(num){
     case 0:
        {
            let foo = 20; 
            break;
        }

     case 1:
        {
           let foo = 30;
           break;
        }
  }

  // CONST is mutable

  /* 
      Another thing to remember is that constants are mutable, even though their values cannot be reassigned. 
      The behavior can be seen in the fact that if the value is an object, the object's properties can be modified.
    e.g
    */

    const myObj = {
         firstName: "Lambros"
    };

    myObj.lastName = "Chatzini";

    console.log(myObj); // [object Object] { firstName: "Lambros", lastName: "Chatzinikolaou" }
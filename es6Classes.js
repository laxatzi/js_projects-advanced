/*
   Javascript Classes, introduced in ECMAScript6, are primarily syntactical sugar over javascript existing prototype based inheritance. The class syntax DOES NOT introduce a new object-oriented inheritance model to javascript

   **syntactical sugar: syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express

    DEFINING CLASSES

    Classes are 'special' functions, and just as you can define 'function expressions' and 'function declarations', the class syntax has two components: 'class expressions' and 'class declarations'.

    CLASS DECLARATIONS

    To declare a class, you use the 'class' keyword with the name of the class

    example given:
*/

    class Rectangle {
       constructor(height, width){
          this.height = height;
          this.width = width;
       }
    } 

    // HOISTING 
    // an important diff between function and class declarations is hoisting. class declarations are NOT hoisted. You FIRST need to DECLARE your class and THEN access it. Otherwise you 'll get thrown a 'reference error'.

    const p = new Rectangle(); // Reference Error

    class Rectangle {}

    // Class Expressions
    // another way to define a class is with 'class expressions' 
    // 'class expressions' can be anonymous or eponymous
    // the name given to a class expression is LOCAL to the class's body. (it can be retrieved through the class's "name" property though)

    // unnamed
    let Rectangle = class {
       constructor(height, width){
          this.height = height;
          this.width = width;
       }
       
       console.log(Rectangle.name); // Rectangle

       // named
   let Rectangle = class Rectangle2 {
      constructor(height, width){
         this.height = height;
         this.width = width;
   }

   console.log(Rectangle.name); // Rectangle2   
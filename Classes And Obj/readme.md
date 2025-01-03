Classes And Objects

1. Prototypes in JS

A javaScript object is and entity having state and behavior (properties and methods)

JS Object have a special property called prototype.

We can set prototype by __proto__ 

if Object and prototype has a same function but in that case object function will get used


2. Classes in JS

Class is a program code template for creating objects.

Those objects will have some state (variables) & some behavious (functions) inside it.

class MyClass {
    constructor() {...  }
    myMethod() {....}
}

let myObj = new MyClass ;


Constructor() method is :

i. automatically invoked by new object

ii.  initializes object 

3. Inheritance in JS.

Inheritance is passing down properties & methods from parent class to child class.

class Parent {

}

class Child extends Parent {

}

* If child and parent have same method, child's methods will be used [Method Overriding]

4. super Keyword 

The super Keyword is used to call the constructor of its parents class to access the parent's properties and methods.

super(args)  // calls Parent's constructor

super.parentMethod(args)


child class is the derived class

5. Error Handling 

try - catch 

try {
    ... normal code
}catch (err) {  // err is error object
    ..handling error 
}
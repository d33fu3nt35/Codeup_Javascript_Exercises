/**
 * Created by daniel on 4/12/17.
 */
"use strict";

var myNameIs = "Daniel";

function sayHello(name) {
    console.log("Hello from " + name);
}

sayHello(myNameIs);

var random = Math.floor(Math.random() * 100) + 1;

function isOdd(number) {
    var message = (number % 2) ? "This number is odd." : "This number is even.";
    console.log(message);
}
console.log(random);

isOdd(random);
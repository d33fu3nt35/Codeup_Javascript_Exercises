/**
 * Created by daniel on 4/12/17.
 */
"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var response = prompt('What is your name?');

while (response !== "" || response !== null) {
    response = prompt("What is your name?", "");
}

// TODO: Show an alert message that welcomes the user based on their input.
alert('Hello, ' + response + ' welcome!');

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizza = prompt("By the way, do you like pizza??").toLowerCase();
if (pizza === "yes") {
    alert("I like pizza too! Ok, bye!!");
} else if (pizza === "no") {
    alert("I guess you don't like pizza.. anyway, bye now.");
} else {
    alert("You didn't answer my question fool!!");
}


// (function(){
//
//
//
//
//
//
// })();
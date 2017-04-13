(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    var person = {};

    console.log(typeof person);

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    var person = {
        firstName: "Daniel",
        lastName: "De La Fuentes"
    };

    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

     person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName;
     };

    alert(person.sayHello());
    console.log(person.sayHello());


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amountbefore: 180, discount: 10, amountafter: 162},
        {name: 'Ryan', amountbefore: 250, discount: 10, amountafter: 225},
        {name: 'George', amountbefore: 320, discount: 10, amountafter: 288}
    ];

    var myFunction = function(shoppers) {
        console.log(shoppers);
    };

    shoppers.forEach(myFunction);


})();



/*
console.log("======== Problem 2 ========");

// define a variable for the name of the customer;
var customer;

// define a variable for the total amount charged
var costDollars = null;

// define a variable for the discount rate
var discountRate = .35;

// define a variable for the total amount purchased
var totalSpentDollars;

// define a variable for the discount breakpoint (the minimum amount spent to apply)
var discountBreakpointDollars = 200;

// define a variable for each customer's purchase
var cameronSpentDollars = 180;
var ryanSpentDollars = 250;
var georgeSpentDollars = 320;

var cameron = "Cameron";
var ryan = "Ryan";
var george = "George";


// the following logic will be repeated for each customer (3 times total)

customer = cameron;
totalSpentDollars = cameronSpentDollars;

if (totalSpentDollars > discountBreakpointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
} else {
    costDollars = totalSpentDollars;
}

console.log(customer + " bought " + "$" + totalSpentDollars + " worth of products." + " Final payment: " + "$" + parseFloat(Math.round(costDollars * 100) / 100).toFixed(2) + ".");*/

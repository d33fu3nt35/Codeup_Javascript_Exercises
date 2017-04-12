/**
 * Created by daniel on 4/11/17.
 */
"use strict";

var random = Math.floor((Math.random()*50)+1);

console.log('Random odd number to skip is: ' + random);

for (var i = 1; i < 100; i+=2) {


    if (random == i) {

        console.log('Yikes! Skipping number: ' + i);

        // use the break keyword to exit from the while loop
        continue;

        // nothing after the break will get processed
        console.log('You will never see this line.');

    }

    console.log('Here is an odd number: ' + i);
}

//for (var i = 1; i < 100; i+=2) {

//    console.log('Here is an odd number: ' + i);
// }

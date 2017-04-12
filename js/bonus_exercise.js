/**
 * Created by daniel on 4/12/17.
 */
"use strict";

//   ** JS Console Demo **
//
//   ** User Interaction BONUS Exercise **
//
//   Create an application that stimulates a registration page using dialogue functions...
//   - ask a user if they are registered
//   - for registered users have the user login with a predefined username and password
//   - if they are not allowed in, have them register with a new username and password
//   - greet them with their username
//   - make sure you check for invalid or empty responses

var userName = "daniel";
var passWord ="123";

var registered = confirm("Are you registered? Yes or No.").toLowerCase();
if (registered) {
    prompt = userName ("Please, login below.");
} else {
    prompt ("Please, register below.");
}
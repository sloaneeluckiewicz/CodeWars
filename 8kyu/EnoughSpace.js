/*
You have to write a function that accepts three parameters:

cap: is the amount of people the bus can hold excluding the driver.
on: is the number of people on the bus excluding the driver.
wait: is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
*/

function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
  }

// OR

function enough(cap, on, wait) {
    // if passengers on + passengers waiting is less than the capacity
    if (on + wait < cap){
        //return 0
    return 0;
    } else {
        // else return (passengers on + passengers waiting) - capacity
    return (on + wait) - cap;
    }
  }
  
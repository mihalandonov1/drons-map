import input1 from "./input1.json" assert { type: "json" };
import input2 from "./input2.json" assert { type: "json" };

import {
  customer1flightTime,
  customer2flightTime,
  customer1flightTime2,
  customer2flightTime2,
  customer3flightTime2,
} from "./TimeAtFlight.js";

export function dronFlightTime(capacity, consumption) {
  let flightTime = capacity / consumption;
  return flightTime;
}

export const dronA = dronFlightTime(500, 1); // 500 min
export const dronB = dronFlightTime(1000, 3); // 333 min
export const dronC = dronFlightTime(2000, 5); // 400 min

// ----- for INPUT 1 ------

export const totalFlightTime = customer1flightTime + customer2flightTime;

export function dronsNeeded() {
  if (totalFlightTime <= 500) {
    console.log("one dron needed");
  } else {
    console.log("minimum two drones needed");
  }
}

// ------ for INPUT 2 -----

export const totalFlightTime2 =
  customer1flightTime2 + customer2flightTime2 + customer3flightTime2;

export function dronsNeeded2() {
  if (totalFlightTime2 <= 500) {
    console.log("one dron needed");
  } else if (totalFlightTime2 >= 500 <= 1000) {
    console.log("min two drones needed");
  } else {
    console.log("minimum 3 drones neede");
  }
}

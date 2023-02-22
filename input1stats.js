import {
  customer1deliveryTimeData1,
  customer2deliveryTimeData1,
} from "./TimeForDelivery.js";
import { customer1flightTime, customer2flightTime } from "./TimeAtFlight.js";
import { dronA, dronB, dronC, totalFlightTime, dronsNeeded } from "./Drones.js";

// ---- drones flight time ----
export function input1stat() {
  console.log(`
  STATS FOR INPUT 1
  `);
  console.log(`Dron A flight time is ${dronA} minutes`);
  console.log(`Dron B flight time is ${Math.floor(dronB)} minutes`);
  console.log(`Dron C flight time is ${dronC} minutes`);

  console.log("");
  // ---- flight time for every customer from INPUT 1 -------

  console.log(
    `Customer 1 dron's flight time is ${customer1flightTime} minutes`
  );
  console.log(
    `Customer 2 dron's flight time is ${customer2flightTime} minutes`
  );
  console.log(`Total flight time: ${totalFlightTime}`);
  dronsNeeded();

  console.log("");
  // ---- delivery time for every customer from INPUT 1 -------

  console.log(
    `Customer 1 dron's delivery time is ${customer1deliveryTimeData1} minutes`
  );
  console.log(
    `Customer 2 dron's delivery time is ${customer2deliveryTimeData1} minutes`
  );
}

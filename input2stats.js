import {
  customer1deliveryTimeData2,
  customer2deliveryTimeData2,
  customer3deliveryTimeData2,
} from "./TimeForDelivery.js";
import {
  customer1flightTime2,
  customer2flightTime2,
  customer3flightTime2,
} from "./TimeAtFlight.js";
import {
  dronA,
  dronB,
  dronC,
  totalFlightTime2,
  dronsNeeded2,
} from "./Drones.js";

// ---- drones flight time ----

export function input2stat() {
  console.log(`
  STATS FOR INPUT 2
  `);
  console.log(`Dron A flight time is ${dronA} minutes`);
  console.log(`Dron B flight time is ${Math.floor(dronB)} minutes`);
  console.log(`Dron C flight time is ${dronC} minutes`);

  console.log("");
  // ---- flight time for every customer from INPUT 1 -------

  console.log(
    `Customer 1 dron's flight time is ${customer1flightTime2} minutes`
  );
  console.log(
    `Customer 2 dron's flight time is ${customer2flightTime2} minutes`
  );
  console.log(
    `Customer 3 dron's flight time is ${customer3flightTime2} minutes`
  );
  console.log(`Total flight time: ${totalFlightTime2}`);
  dronsNeeded2();

  console.log("");
  // ---- delivery time for every customer from INPUT 1 -------

  console.log(
    `Customer 1 dron's delivery time is ${customer1deliveryTimeData2} minutes`
  );
  console.log(
    `Customer 2 dron's delivery time is ${customer2deliveryTimeData2} minutes`
  );
  console.log(
    `Customer 2 dron's delivery time is ${customer3deliveryTimeData2} minutes`
  );
}

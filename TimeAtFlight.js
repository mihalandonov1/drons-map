import { customer1, customer2, customer3 } from "./ChooseWarehouse.js";

export function flightTime(numberOfOrders, customerNo) {
  let time = customerNo * numberOfOrders * 2;
  return time;
}

// ----- for INPUT 1 -----

export const customer1flightTime = flightTime(2, customer1);
export const customer2flightTime = flightTime(1, customer2);

// ------ for INPUT 2 ------

export const customer1flightTime2 = flightTime(2, customer1);
export const customer2flightTime2 = flightTime(2, customer2);
export const customer3flightTime2 = flightTime(2, customer3);

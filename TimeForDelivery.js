import { customer1, customer2, customer3 } from "./ChooseWarehouse.js";

export function deliveryTime(numberOfOrders, customerNo) {
  let minInWarehouse = 5;
  let DroneCourse = numberOfOrders * 2 - 1;
  if (DroneCourse >= 3) {
    return customerNo * DroneCourse + (numberOfOrders - 1) * minInWarehouse;
  } else {
    return customerNo * DroneCourse;
  }
}

// input 1

export const customer1deliveryTimeData1 = deliveryTime(2, customer1);
export const customer2deliveryTimeData1 = deliveryTime(1, customer2);

// input 2

export const customer1deliveryTimeData2 = deliveryTime(2, customer1);
export const customer2deliveryTimeData2 = deliveryTime(2, customer2);
export const customer3deliveryTimeData2 = deliveryTime(2, customer3);

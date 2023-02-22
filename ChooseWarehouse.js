import input1 from "./input1.json" assert { type: "json" };

export function chooseBestWarehouseForDeliver(custumerCoordX, custumerCoordY) {
  function deliveryTimeForRigthWarehouse() {
    const rightWarehouseCoordX = input1.warehouses[1].x;
    const rightWarehouseCoordY = input1.warehouses[1].y;
    let deliveryTime = 0;
    const xCoord = custumerCoordX - rightWarehouseCoordX;
    const yCoord = custumerCoordY - rightWarehouseCoordY;
    const sum = Math.sqrt(xCoord ** 2 + yCoord ** 2);
    deliveryTime += sum;
    return Math.floor(deliveryTime);
  }

  function deliveryTimeForLeftWarehouse() {
    const leftWarehouseCoordX = input1.warehouses[0].x;
    const leftWarehouseCoordY = input1.warehouses[0].y;
    let deliveryTime = 0;
    const xCoord = custumerCoordX - leftWarehouseCoordX;
    const yCoord = custumerCoordY - leftWarehouseCoordY;
    const sum = Math.sqrt(xCoord ** 2 + yCoord ** 2);
    deliveryTime += sum;
    return Math.floor(deliveryTime);
  }
  let leftWarehouse = deliveryTimeForLeftWarehouse();
  let rightWarehouse = deliveryTimeForRigthWarehouse();

  return leftWarehouse < rightWarehouse ? leftWarehouse : rightWarehouse;
}

// customer time away from the neares warehouse
export const customer1 = chooseBestWarehouseForDeliver(
  input1.customers[0].coordinates.x,
  input1.customers[0].coordinates.y
);

export const customer2 = chooseBestWarehouseForDeliver(
  input1.customers[1].coordinates.x,
  input1.customers[1].coordinates.y
);

export const customer3 = chooseBestWarehouseForDeliver(
  input1.customers[2].coordinates.x,
  input1.customers[2].coordinates.y
);

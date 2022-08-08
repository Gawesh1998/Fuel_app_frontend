import { FuelReservesService } from "../classes/fuel-reserves.service";
import { emitDataToAllocationTopic } from "./emit-data";

export default async function calcuateAllocation(allocation:any) {

    const { fuelType, fuelQuantity, _id } = allocation;

    // find all allocations matching and calculate the total fuel quantity of fuel type
    const allocations = await allocation.find({ fuelType });
        let totalFuelQuantity = 0;
        allocations.forEach((allocation: { fuelQuantity: number; }) => {
        totalFuelQuantity += allocation.fuelQuantity;
  });

   if (
    FuelReservesService.fuelReserves[fuelType - 1].fuelQuantity < fuelQuantity
  ) {
    console.log(
      `fuel quantity requested is greater than the fuel quantity in the gas reserves`
    );
    return;
  } else {
    //update the fuel quantity in the gas reserves
    FuelReservesService.fuelReserves[fuelType - 1].fuelQuantity -= fuelQuantity;
    //update the fuel quantity in the allocation
    allocation.fuelQuantity = fuelQuantity;
    //update the status of the allocation to "allocated"
    allocation.status = "allocated";
    //save the allocation to the database
    const updatedAllocation = await allocation.findByIdAndUpdate(
      _id,
      allocation
    );

    console.log(
        `Fuel quantity left in reserves: ${
            FuelReservesService.fuelReserves[fuelType - 1].fuelQuantity
        }`
      );
      emitDataToAllocationTopic(
        updatedAllocation,
        updatedAllocation!.invoiceNumber
      );
    }
    
}
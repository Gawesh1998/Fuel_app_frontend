import { Message } from "kafkajs";
import Allocation from "../model/Allocation";
import calculateAllocation from "./calculateAllocation";

export default async function processIncomingMesssage(message: Message) {
    const { value } = message;
    const data = JSON.parse(value!.toString());
    const { id, gasStationName, fuelType, fuelQuantity, invoiceNumber } = data;
  
    console.log(
      `allocation of ${fuelQuantity} of ${fuelType} to ${gasStationName} for invoice ${invoiceNumber}`
    );
  
    const newAllocation: any = new Allocation({
      invoiceNumber,
      fuelType,
      fuelQuantity,
      status: "pending",
    }); // create a new allocation
    const allocation: any = await newAllocation.save(); // save the allocation to the database
  
    console.log(`allocation saved to database`);
  
    await calculateAllocation(allocation); // calculate the allocation
  
    return;
  }
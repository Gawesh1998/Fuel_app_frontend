import { FuelOrder } from "../interface/fuel-order";
import { createInvoiceId } from "./createInvoice";

export default function processIncomingOrderData(
    fuelOrder: FuelOrder
  ): any {
    const invoiceNumber: String = createInvoiceId();
  
    if (fuelOrder.fuelType === 0 || fuelOrder.fuelQuantity === 0) {
      return false;
    }
  
    const formattedFuelOrder: FuelOrder = {
      invoiceNumber,
      fuelType: fuelOrder.fuelType,
      fuelQuantity: fuelOrder.fuelQuantity,
      id: fuelOrder.id,
      gasStationName: fuelOrder.gasStationName,
    };
  
    return formattedFuelOrder;
  }
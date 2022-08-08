import { Injectable } from '@angular/core';
import { FuelReserves } from '../interface/fuel-reserves';

@Injectable({
  providedIn: 'root'
})
export class FuelReservesService {

  constructor() { }

  static fuelReserves: FuelReserves[] = [
    {
      fuelType: 1,
      fuelQuantity: 100_000,
    },
    {
      fuelType: 2,
      fuelQuantity: 100_000,
    },
    {
      fuelType: 3,
      fuelQuantity: 100_000,
    },
    {
      fuelType: 4,
      fuelQuantity: 100_000,
    },
  ];
}

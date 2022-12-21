import { VehicleHelper } from '../helpers/vehicle-model-helper'
export class VehicleModel {
  constructor (private readonly vehicle: VehicleHelper) {}

  get getName (): string {
    return this.vehicle.name
  }

  get getModel (): string {
    return this.vehicle.model
  }

  get getYear (): number {
    return this.vehicle.year
  }

  get getPrice (): number {
    return this.vehicle.price
  }

  get getInventory (): boolean {
    return this.vehicle.inventory
  }
}

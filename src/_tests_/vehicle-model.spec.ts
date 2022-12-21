import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class Vehicle', () => {
    const vehicleModel = new VehicleModel('Nissan', 'DTX', 2020)
    expect(vehicleModel.getName).toEqual('Nissan')
    expect(vehicleModel.getModel).toEqual('DTX')
    expect(vehicleModel.getYear).toBe(2020)
  })
})

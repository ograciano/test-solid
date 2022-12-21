import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Test in Class ', () => {
    const foodModel = new FoodModel('Apple', 'Sweet and red', 10)
    expect(foodModel.getName).toEqual('Apple')
    expect(foodModel.getDescription).toEqual('Sweet and red')
    expect(foodModel.getPrice).toBe(10)
  })
})

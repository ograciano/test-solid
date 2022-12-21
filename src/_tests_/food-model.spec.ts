import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Test in Class ', () => {
    const foodModel = new FoodModel({
      name: 'Apple',
      description: 'Sweet and red',
      price: 10
    })
    expect(foodModel.getName).toEqual('Apple')
    expect(foodModel.getDescription).toEqual('Sweet and red')
    expect(foodModel.getPrice).toBe(10)
  })
})

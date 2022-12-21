import { FoodModelHelper } from '../helpers/food-model-helper'
export class FoodModel {
  constructor (private readonly food: FoodModelHelper) { }

  get getName (): string {
    return this.food.name
  }

  get getDescription (): string {
    return this.food.description
  }

  get getPrice (): number {
    return this.food.price
  }
}

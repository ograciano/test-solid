export class FoodModel {
  constructor (private readonly name: string, private readonly description: string, private readonly price: number) {
    this.name = name
    this.description = description
    this.price = price
  }

  get getName (): string {
    return this.name
  }

  get getDescription (): string {
    return this.description
  }

  get getPrice (): number {
    return this.price
  }
}

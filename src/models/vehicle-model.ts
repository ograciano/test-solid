export class VehicleModel {
  constructor (private readonly name: string, private readonly model: string, private readonly year: number) {
    this.name = name
    this.model = model
    this.year = year
  }

  get getName (): string {
    return this.name
  }

  get getModel (): string {
    return this.model
  }

  get getYear (): number {
    return this.year
  }
}

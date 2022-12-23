export class MissingFormatParameter extends Error {
  constructor (public name: string) {
    super(`Error in de Parameter: ${name}`)
  }
}

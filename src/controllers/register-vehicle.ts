import { HttpRequest, HttpResponse } from '../interfaces/http-interface'
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requireProperties = ['name', 'model', 'year', 'color']
    for (const props of requireProperties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new Error(`error in the: ${props}`)
        }
      }
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}

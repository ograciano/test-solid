import { HttpRequest, HttpResponse } from '../interfaces/http-interface'
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { name, model, year } = httpRequest.body
    if (!name) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    if (!model) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }

    if (!year) {
      return {
        statusCode: 400,
        body: new Error('error in the: year')
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}

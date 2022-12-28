import { UrlLogin, UrlUser } from '../utils/protocols-http'

describe('Protocols http and Querys', () => {
  test('Url Login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parseUrl.href).toBe('http://localhost:3000/login')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query to Login Request', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })

  test('Url User', () => {
    const parseUrl = UrlUser.parseUrl('http://localhost:3000/user')

    expect(parseUrl.href).toBe('http://localhost:3000/user')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query to User Request', () => {
    const parseUrl = UrlUser.parseUrl('http://localhost:3000/login?user=user&password=password&name=name&lastname=lastname')
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })
})

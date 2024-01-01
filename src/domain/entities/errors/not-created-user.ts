export class NotCreatedUser extends Error {
  constructor () {
    super('CreateUser failed')
    this.name = 'CreateUserError'
  }
}

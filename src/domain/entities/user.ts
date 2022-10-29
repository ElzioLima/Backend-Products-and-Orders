type UserData = { email: string, accessToken: string }

export class User {
  email: string
  accessToken: string

  constructor (productData: UserData) {
    this.email = productData.email
    this.accessToken = productData.accessToken
  }
}

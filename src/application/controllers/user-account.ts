import { Controller } from '@/application/controllers'
import { HttpResponse, unauthorized, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { AuthenticationError } from '@/domain/entities'
import { UserAuthentication } from '@/domain/use-cases'

type HttpRequest = { email: string, password: string }
type Model = Error | { accessToken: string }

export class UserLoginController extends Controller {
  constructor (private readonly userAuthentication: UserAuthentication) {
    super()
  }

  async perform ({ email, password }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.userAuthentication({ email, password })
      return ok(accessToken)
    } catch (error) {
      if (error instanceof AuthenticationError) return unauthorized()
      throw error
    }
  }

  override buildValidators ({ email, password }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: email, fieldName: 'email' })
        .required()
        .build(),
      ...Builder.of({ value: password, fieldName: 'password' })
        .required()
        .build()
    ]
  }
}

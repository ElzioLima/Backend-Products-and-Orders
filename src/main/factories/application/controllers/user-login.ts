import { makeUserAuthentication } from '@/main/factories/domain/use-cases'
import { UserLoginController, Controller } from '@/application/controllers'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeUserLoginController = (): Controller => {
  const controller = new UserLoginController(makeUserAuthentication())
  return makePgTransactionController(controller)
}

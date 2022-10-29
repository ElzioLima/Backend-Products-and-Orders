import { makeCreateOrder } from '@/main/factories/domain/use-cases'
import { CreateOrderController, Controller } from '@/application/controllers'

export const makeCreateOrderController = (): Controller => {
  const controller = new CreateOrderController(makeCreateOrder())
  return controller
}

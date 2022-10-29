import { makeDeleteOrder } from '@/main/factories/domain/use-cases'
import { DeleteOrderController, Controller } from '@/application/controllers'

export const makeDeleteOrderController = (): Controller => {
  const controller = new DeleteOrderController(makeDeleteOrder())
  return controller
}

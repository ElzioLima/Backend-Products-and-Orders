import { makeUpdateOrder } from '@/main/factories/domain/use-cases'
import { UpdateOrderController, Controller } from '@/application/controllers'
import { makePgTransactionController } from '../../decorators'

export const makeUpdateOrderController = (): Controller => {
  const controller = new UpdateOrderController(makeUpdateOrder())
  return makePgTransactionController(controller)
}

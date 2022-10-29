import { makeListOrder } from '@/main/factories/domain/use-cases'
import { ListOrderController, Controller } from '@/application/controllers'

export const makeListOrderController = (): Controller => {
  const controller = new ListOrderController(makeListOrder())
  return controller
}

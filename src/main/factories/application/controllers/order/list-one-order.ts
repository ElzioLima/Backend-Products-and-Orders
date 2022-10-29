import { makeListOneOrder } from '@/main/factories/domain/use-cases'
import { ListOneOrderController, Controller } from '@/application/controllers'

export const makeListOneOrderController = (): Controller => {
  const controller = new ListOneOrderController(makeListOneOrder())
  return controller
}

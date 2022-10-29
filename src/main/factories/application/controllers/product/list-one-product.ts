import { makeListOneProduct } from '@/main/factories/domain/use-cases'
import { ListOneProductController, Controller } from '@/application/controllers'

export const makeListOneProductController = (): Controller => {
  const controller = new ListOneProductController(makeListOneProduct())
  return controller
}

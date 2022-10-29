import { makeDeleteProduct } from '@/main/factories/domain/use-cases'
import { DeleteProductController, Controller } from '@/application/controllers'

export const makeDeleteProductController = (): Controller => {
  const controller = new DeleteProductController(makeDeleteProduct())
  return controller
}

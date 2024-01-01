import { makeUpdateProduct } from '@/main/factories/domain/use-cases'
import { UpdateProductController, Controller } from '@/application/controllers'

export const makeUpdateProductController = (): Controller => {
  const controller = new UpdateProductController(makeUpdateProduct())
  return controller
}

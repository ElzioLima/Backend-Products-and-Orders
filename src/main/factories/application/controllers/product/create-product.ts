import { makeCreateProduct } from '@/main/factories/domain/use-cases'
import { CreateProductController, Controller } from '@/application/controllers'

export const makeCreateProductController = (): Controller => {
  const controller = new CreateProductController(makeCreateProduct())
  return controller
}

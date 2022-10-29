import { makeListProduct } from '@/main/factories/domain/use-cases'
import { ListProductController, Controller } from '@/application/controllers'

export const makeListProductController = (): Controller => {
  const controller = new ListProductController(makeListProduct())
  return controller
}

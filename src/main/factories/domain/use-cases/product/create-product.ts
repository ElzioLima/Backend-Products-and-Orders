import { setupCreateProduct, CreateProduct } from '@/domain/use-cases'
import { makePgProductRepo } from '@/main/factories/infra/repos/postgres'

export const makeCreateProduct = (): CreateProduct => {
  return setupCreateProduct(
    makePgProductRepo()
  )
}

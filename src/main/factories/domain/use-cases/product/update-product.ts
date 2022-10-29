import { setupUpdateProduct, UpdateProduct } from '@/domain/use-cases'
import { makePgProductRepo } from '@/main/factories/infra/repos/postgres'

export const makeUpdateProduct = (): UpdateProduct => {
  return setupUpdateProduct(
    makePgProductRepo()
  )
}

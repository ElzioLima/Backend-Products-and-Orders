import { setupDeleteProduct, DeleteProduct } from '@/domain/use-cases'
import { makePgProductRepo } from '@/main/factories/infra/repos/postgres'

export const makeDeleteProduct = (): DeleteProduct => {
  return setupDeleteProduct(
    makePgProductRepo()
  )
}

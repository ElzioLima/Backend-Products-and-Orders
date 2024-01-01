import { setupListProduct, ListProduct } from '@/domain/use-cases'
import { makePgProductRepo } from '@/main/factories/infra/repos/postgres'

export const makeListProduct = (): ListProduct => {
  return setupListProduct(
    makePgProductRepo()
  )
}

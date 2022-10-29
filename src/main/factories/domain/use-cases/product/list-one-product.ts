import { setupListOneProduct, ListOneProduct } from '@/domain/use-cases'
import { makePgProductRepo } from '@/main/factories/infra/repos/postgres'

export const makeListOneProduct = (): ListOneProduct => {
  return setupListOneProduct(
    makePgProductRepo()
  )
}

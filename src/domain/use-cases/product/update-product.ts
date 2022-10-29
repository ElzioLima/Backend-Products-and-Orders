import { DBUpdateProduct } from '@/domain/contracts/repos'
import { Product } from '@/domain/entities'

type Setup = (productRepo: DBUpdateProduct) => UpdateProduct
type Input = { id: number, name: string, price: number, category: string }
type Output = undefined | { id: string, name: string, price: number, category: string }
export type UpdateProduct = (input: Input) => Promise<Output>

export const setupUpdateProduct: Setup = (productRepo) => async ({ id, name, price, category }) => {
  const productData = await productRepo.update({ id, name, price, category })
  if (productData != null) {
    const product = new Product(productData)
    return product
  }
}

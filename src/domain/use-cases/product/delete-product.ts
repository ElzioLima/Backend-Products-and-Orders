import { DBDeleteProduct } from '@/domain/contracts/repos'
import { Product } from '@/domain/entities'

type Setup = (productRepo: DBDeleteProduct) => DeleteProduct
type Input = { id: number }
type Output = undefined | { id: number, name: string, price: number, category: string }
export type DeleteProduct = (input: Input) => Promise<Output>

export const setupDeleteProduct: Setup = (productRepo) => async ({ id }) => {
  const productData = await productRepo.delete({ id })
  if (productData != null) {
    const product = new Product(productData)
    return product
  }
}

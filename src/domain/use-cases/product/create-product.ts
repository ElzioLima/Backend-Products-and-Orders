import { DBCreateProduct } from '@/domain/contracts/repos'
import { Product } from '@/domain/entities'

type Setup = (productRepo: DBCreateProduct) => CreateProduct
type Input = { name: string, price: number, category: string }
type Output = undefined | { id: number, name: string, price: number, category: string }
export type CreateProduct = (input: Input) => Promise<Output>

export const setupCreateProduct: Setup = (productRepo) => async ({ name, price, category }) => {
  const productData = await productRepo.create({ name, price, category })
  if (productData != null) {
    const product = new Product(productData)
    return product
  }
}

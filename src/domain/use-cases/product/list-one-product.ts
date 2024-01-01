import { DBListOneProduct } from '@/domain/contracts/repos'
import { Product } from '@/domain/entities'

type Setup = (productRepo: DBListOneProduct) => ListOneProduct
type Input = { id: string }
type Output = undefined | { id: string, name: string, price: number, category: string }
export type ListOneProduct = (input: Input) => Promise<Output>

export const setupListOneProduct: Setup = (productRepo) => async ({ id }) => {
  const productData = await productRepo.listOne({ id })
  if (productData != null) {
    const product = new Product(productData)
    return product
  }
}

import { DBListProduct } from '@/domain/contracts/repos'
import { Product } from '@/domain/entities'

type Setup = (productRepo: DBListProduct) => ListProduct
type Output = undefined | Array<{ id: number, name: string, price: number, category: string }>
export type ListProduct = () => Promise<Output>

export const setupListProduct: Setup = (productRepo) => async () => {
  const productData = await productRepo.list()
  if (productData != null) {
    const productList = productData.map((product) => {
      return new Product(product)
    })
    return productList
  }
}

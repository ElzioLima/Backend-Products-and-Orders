import { DBListOrder } from '@/domain/contracts/repos'
import { Order, Product } from '@/domain/entities'

type Setup = (orderRepo: DBListOrder) => ListOrder
type Output = undefined | Array<{ id: string, totalPrice: number, products: Product[] }>
export type ListOrder = () => Promise<Output>

export const setupListOrder: Setup = (orderRepo) => async () => {
  const productData = await orderRepo.list()
  if (productData != null) {
    const productList = productData.map((product) => {
      return new Order(product)
    })
    return productList
  }
}

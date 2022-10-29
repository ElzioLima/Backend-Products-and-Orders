import { DBListOneOrder } from '@/domain/contracts/repos'
import { Order, Product } from '@/domain/entities'

type Setup = (orderRepo: DBListOneOrder) => ListOneOrder
type Input = { id: number }
type Output = undefined | { id: number, totalPrice: number, products: Product[] }
export type ListOneOrder = (input: Input) => Promise<Output>

export const setupListOneOrder: Setup = (orderRepo) => async ({ id }) => {
  const productData = await orderRepo.listOne({ id })
  if (productData != null) {
    const product = new Order(productData)
    return product
  }
}

import { DBListOneOrder } from '@/domain/contracts/repos'
import { Order, Product } from '@/domain/entities'

type Setup = (orderRepo: DBListOneOrder) => ListOneOrder
type Input = { id: string }
type Output = undefined | { id: string, totalPrice: number, products: Product[] }
export type ListOneOrder = (input: Input) => Promise<Output>

export const setupListOneOrder: Setup = (orderRepo) => async ({ id }) => {
  const productData = await orderRepo.listOne({ id })
  if (productData != null) {
    const product = new Order(productData)
    return product
  }
}

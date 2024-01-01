import { DBDeleteOrder } from '@/domain/contracts/repos'
import { Order, Product } from '@/domain/entities'

type Setup = (orderRepo: DBDeleteOrder) => DeleteOrder
type Input = { id: string }
type Output = undefined | { id: string, totalPrice: number, products: Product[] }
export type DeleteOrder = (input: Input) => Promise<Output>

export const setupDeleteOrder: Setup = (orderRepo) => async ({ id }) => {
  const productData = await orderRepo.delete({ id })
  if (productData != null) {
    const product = new Order(productData)
    return product
  }
}

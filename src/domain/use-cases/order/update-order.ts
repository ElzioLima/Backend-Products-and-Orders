import { DBUpdateOrder } from '@/domain/contracts/repos'
import { Order, Product } from '@/domain/entities'

type Setup = (orderRepo: DBUpdateOrder) => UpdateOrder
type Input = { id: string, products: Product[] }
type Output = undefined | { id: string, totalPrice: number, products: Product[] }
export type UpdateOrder = (input: Input) => Promise<Output>

export const setupUpdateOrder: Setup = (orderRepo) => async ({ id, products }) => {
  const productData = await orderRepo.update({ id, products })
  if (productData != null) {
    const product = new Order(productData)
    return product
  }
}

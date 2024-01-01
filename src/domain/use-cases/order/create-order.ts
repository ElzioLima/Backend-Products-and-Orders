import { DBCreateOrder } from '@/domain/contracts/repos'
import { Order } from '@/domain/entities'

type Setup = (orderRepo: DBCreateOrder) => CreateOrder
type Input = {
  products: Array<{
    id: string
    name?: string
    price?: number
    category?: string
    deletedAt?: Date
  }>
}
type Output = undefined | {
  id: string
  totalPrice: number
  products: Array<{
    id: string
    name?: string
    price?: number
    category?: string
    deletedAt?: Date
  }>
}
export type CreateOrder = (input: Input) => Promise<Output>

export const setupCreateOrder: Setup = (orderRepo) => async ({ products }) => {
  const orderData = await orderRepo.create({ products })
  if (orderData != null) {
    const order = new Order(orderData)
    return order
  }
}

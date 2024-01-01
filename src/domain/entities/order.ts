type OrderData = {
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

export class Order {
  id: string
  totalPrice: number
  products: Array<{
    id: string
    name?: string
    price?: number
    category?: string
    deletedAt?: Date
  }>

  constructor (productData: OrderData) {
    this.id = productData.id
    this.totalPrice = productData.totalPrice
    this.products = productData.products
  }
}

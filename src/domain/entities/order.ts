type OrderData = {
  id: number
  totalPrice: number
  products: Array<{
    id: number
    name?: string
    price?: number
    category?: string
    deletedAt?: Date
  }>
}

export class Order {
  id: number
  totalPrice: number
  products: Array<{
    id: number
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

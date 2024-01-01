type ProductData = { id: string, name: string, price: number, category: string }

export class Product {
  id: string
  name: string
  price: number
  category: string

  constructor (productData: ProductData) {
    this.id = productData.id
    this.name = productData.name
    this.price = productData.price
    this.category = productData.category
  }
}

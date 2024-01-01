import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { CreateOrder } from '@/domain/use-cases'

type HttpRequest = {
  products: Array<{
    id: string
    name?: string
    price?: number
    category?: string
    deletedAt?: Date
  }>
}
type Model = undefined | {
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

export class CreateOrderController extends Controller {
  constructor (private readonly createOrder: CreateOrder) {
    super()
  }

  override async perform (products: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.createOrder(products)
    return ok(product)
  }

  override buildValidators ({ products }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: products, fieldName: 'products' })
        .required()
        .build()
    ]
  }
}

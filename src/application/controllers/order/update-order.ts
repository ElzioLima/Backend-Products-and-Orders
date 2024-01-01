import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { UpdateOrder } from '@/domain/use-cases'
import { Product } from '@/domain/entities'

type HttpRequest = { id: string, products: Product[] }
type Model = undefined | { id: string, totalPrice: number, products: Product[] }

export class UpdateOrderController extends Controller {
  constructor (private readonly createOrder: UpdateOrder) {
    super()
  }

  override async perform ({ id, products }: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.createOrder({ id, products })
    return ok(product)
  }

  override buildValidators ({ id, products }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build(),
      ...Builder.of({ value: products, fieldName: 'products' })
        .required()
        .build()
    ]
  }
}

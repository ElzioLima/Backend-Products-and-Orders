import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { DeleteOrder } from '@/domain/use-cases'
import { Product } from '@/domain/entities'

type HttpRequest = { id: number }
type Model = undefined | { id: number, totalPrice: number, products: Product[] }

export class DeleteOrderController extends Controller {
  constructor (private readonly deleteOrder: DeleteOrder) {
    super()
  }

  override async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.deleteOrder({ id })
    return ok(product)
  }

  override buildValidators ({ id }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build()
    ]
  }
}

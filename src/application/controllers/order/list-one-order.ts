import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { ListOneOrder } from '@/domain/use-cases'
import { Product } from '@/domain/entities'

type HttpRequest = { id: number }
type Model = undefined | { id: number, totalPrice: number, products: Product[] }

export class ListOneOrderController extends Controller {
  constructor (private readonly listOneOrder: ListOneOrder) {
    super()
  }

  override async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.listOneOrder({ id })
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

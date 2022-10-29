import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { DeleteProduct } from '@/domain/use-cases'

type HttpRequest = { id: number }
type Model = undefined | { id: number, name: string, price: number, category: string }

export class DeleteProductController extends Controller {
  constructor (private readonly deleteProduct: DeleteProduct) {
    super()
  }

  override async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.deleteProduct({ id })
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

import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { UpdateProduct } from '@/domain/use-cases'

type HttpRequest = { id: number, name: string, price: number, category: string }
type Model = undefined | { id: number, name: string, price: number, category: string }

export class UpdateProductController extends Controller {
  constructor (private readonly createProduct: UpdateProduct) {
    super()
  }

  override async perform ({ id, name, price, category }: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.createProduct({ id, name, price, category })
    return ok(product)
  }

  override buildValidators ({ id, name, price, category }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build(),
      ...Builder.of({ value: name, fieldName: 'name' })
        .required()
        .build(),
      ...Builder.of({ value: price, fieldName: 'price' })
        .required()
        .build(),
      ...Builder.of({ value: category, fieldName: 'category' })
        .required()
        .build()
    ]
  }
}

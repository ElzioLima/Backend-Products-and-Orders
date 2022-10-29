import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { CreateProduct } from '@/domain/use-cases'

type HttpRequest = { name: string, price: number, category: string }
type Model = undefined | { id: number, name: string, price: number, category: string }

export class CreateProductController extends Controller {
  constructor (private readonly createProduct: CreateProduct) {
    super()
  }

  override async perform ({ name, price, category }: HttpRequest): Promise<HttpResponse<Model>> {
    const product = await this.createProduct({ name, price, category })
    return ok(product)
  }

  override buildValidators ({ name, price, category }: HttpRequest): Validator[] {
    return [
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

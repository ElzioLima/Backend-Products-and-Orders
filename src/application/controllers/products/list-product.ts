import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { ListProduct } from '@/domain/use-cases'

type Model = undefined | Array<{ id: string, name: string, price: number, category: string }>

export class ListProductController extends Controller {
  constructor (private readonly createProduct: ListProduct) {
    super()
  }

  override async perform (): Promise<HttpResponse<Model>> {
    const product = await this.createProduct()
    return ok(product)
  }

  override buildValidators (): Validator[] {
    return []
  }
}

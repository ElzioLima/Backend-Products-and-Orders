import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { ListOrder } from '@/domain/use-cases'
import { Product } from '@/domain/entities'

type Model = undefined | Array<{ id: string, totalPrice: number, products: Product[] }>

export class ListOrderController extends Controller {
  constructor (private readonly createOrder: ListOrder) {
    super()
  }

  override async perform (): Promise<HttpResponse<Model>> {
    const product = await this.createOrder()
    return ok(product)
  }

  override buildValidators (): Validator[] {
    return []
  }
}

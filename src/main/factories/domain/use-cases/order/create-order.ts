import { setupCreateOrder, CreateOrder } from '@/domain/use-cases'
import { makePgOrderRepo } from '@/main/factories/infra/repos/postgres'

export const makeCreateOrder = (): CreateOrder => {
  return setupCreateOrder(
    makePgOrderRepo()
  )
}

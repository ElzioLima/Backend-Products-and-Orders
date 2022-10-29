import { setupUpdateOrder, UpdateOrder } from '@/domain/use-cases'
import { makePgOrderRepo } from '@/main/factories/infra/repos/postgres'

export const makeUpdateOrder = (): UpdateOrder => {
  return setupUpdateOrder(
    makePgOrderRepo()
  )
}

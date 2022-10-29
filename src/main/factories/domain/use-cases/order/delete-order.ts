import { setupDeleteOrder, DeleteOrder } from '@/domain/use-cases'
import { makePgOrderRepo } from '@/main/factories/infra/repos/postgres'

export const makeDeleteOrder = (): DeleteOrder => {
  return setupDeleteOrder(
    makePgOrderRepo()
  )
}

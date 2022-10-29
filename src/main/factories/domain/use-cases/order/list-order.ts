import { setupListOrder, ListOrder } from '@/domain/use-cases'
import { makePgOrderRepo } from '@/main/factories/infra/repos/postgres'

export const makeListOrder = (): ListOrder => {
  return setupListOrder(
    makePgOrderRepo()
  )
}

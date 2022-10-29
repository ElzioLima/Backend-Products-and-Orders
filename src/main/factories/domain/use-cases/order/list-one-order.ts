import { setupListOneOrder, ListOneOrder } from '@/domain/use-cases'
import { makePgOrderRepo } from '@/main/factories/infra/repos/postgres'

export const makeListOneOrder = (): ListOneOrder => {
  return setupListOneOrder(
    makePgOrderRepo()
  )
}

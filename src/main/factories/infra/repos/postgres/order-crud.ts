import { PgOrderRepository } from '@/infra/repos/postgres'

export const makePgOrderRepo = (): PgOrderRepository => {
  return new PgOrderRepository()
}

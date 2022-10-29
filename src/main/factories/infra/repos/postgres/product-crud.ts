import { PgProductRepository } from '@/infra/repos/postgres'

export const makePgProductRepo = (): PgProductRepository => {
  return new PgProductRepository()
}

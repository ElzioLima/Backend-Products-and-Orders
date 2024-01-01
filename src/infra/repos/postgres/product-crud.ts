import { PgProduct } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import {
  DBCreateProduct,
  DBListOneProduct,
  DBListProduct,
  DBUpdateProduct,
  DBDeleteProduct
} from '@/domain/contracts/repos'

export class PgProductRepository extends PgRepository implements DBCreateProduct, DBListProduct, DBUpdateProduct, DBListOneProduct, DBDeleteProduct {
  async create ({ name, price, category }: DBCreateProduct.Input): Promise<DBCreateProduct.Output> {
    const pgProductRepo = this.getRepository(PgProduct)
    const pgProduct = await pgProductRepo.save({ name, price, category })
    if (pgProduct !== null) {
      return {
        id: pgProduct.id ?? undefined,
        name: pgProduct.name ?? undefined,
        price: pgProduct.price ?? undefined,
        category: pgProduct.category ?? undefined
      }
    }
  }

  async update ({ id, name, price, category }: DBUpdateProduct.Input): Promise<DBUpdateProduct.Output> {
    const pgProductRepo = this.getRepository(PgProduct)
    const pgProductUpdated = await pgProductRepo.update(id, { name, price, category })
    if (pgProductUpdated !== undefined) {
      const pgProduct = await pgProductRepo.findOneBy({id})
      if (pgProduct !== null) {
        return {
          id: pgProduct.id ?? undefined,
          name: pgProduct.name ?? undefined,
          price: pgProduct.price ?? undefined,
          category: pgProduct.category ?? undefined
        }
      }
    }
  }

  async list (): Promise<DBListProduct.Output> {
    const pgProductRepo = this.getRepository(PgProduct)
    const pgProductList = pgProductRepo.find()
    return (await pgProductList).map(({ id, name, price, category }) => {
      return {
        id: id ?? undefined,
        name: name ?? undefined,
        price: price ?? undefined,
        category: category ?? undefined
      }
    })
  }

  async listOne ({ id }: DBListOneProduct.Input): Promise<DBListOneProduct.Output> {
    const pgProductRepo = this.getRepository(PgProduct)
    const pgProduct = await pgProductRepo.findOneBy({id})
    if (pgProduct !== null) {
      return {
        id: pgProduct.id ?? undefined,
        name: pgProduct.name ?? undefined,
        price: pgProduct.price ?? undefined,
        category: pgProduct.category ?? undefined
      }
    }
  }

  async delete ({ id }: DBListOneProduct.Input): Promise<DBListOneProduct.Output> {
    const pgProductRepo = this.getRepository(PgProduct)
    const pgProduct = await pgProductRepo.findOneBy({id})
    if (pgProduct !== null) {
      const pgProductDeleted = await pgProductRepo.softDelete(id)
      return {
        id: pgProduct.id ?? undefined,
        name: pgProduct.name ?? undefined,
        price: pgProduct.price ?? undefined,
        category: pgProduct.category ?? undefined
      }
    }
  }
}

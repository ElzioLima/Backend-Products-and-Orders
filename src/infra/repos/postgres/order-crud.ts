import { PgOrder, PgProduct } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import {
  DBCreateOrder,
  DBListOneOrder,
  DBListOrder,
  DBUpdateOrder,
  DBDeleteOrder
} from '@/domain/contracts/repos'

export class PgOrderRepository extends PgRepository implements DBCreateOrder, DBListOrder, DBUpdateOrder, DBListOneOrder, DBDeleteOrder {
  async create ({ products }: DBCreateOrder.Input): Promise<DBCreateOrder.Output> {
    const pgOrderRepo = this.getRepository(PgOrder)
    const pgProductRepo = this.getRepository(PgProduct)
    const { totalPrice } = await pgProductRepo.createQueryBuilder('products').select('SUM(price)', 'totalPrice').whereInIds(products).getRawOne()
    const pgOrderInserted = await pgOrderRepo.save({ products, totalPrice })
    if (pgOrderInserted !== undefined) {
      return {
        id: pgOrderInserted.id ?? undefined,
        totalPrice: pgOrderInserted.totalPrice ?? undefined,
        products: pgOrderInserted.products ?? []
      }
    }
  }

  async update ({ id, products }: DBUpdateOrder.Input): Promise<DBUpdateOrder.Output> {
    const pgOrderRepo = this.getRepository(PgOrder)
    const pgOrderSelected = await pgOrderRepo.findOne(id)
    if (pgOrderSelected != null) {
      const pgProductRepo = this.getRepository(PgProduct)
      const { totalPrice } = await pgProductRepo.createQueryBuilder('products').select('SUM(price)', 'totalPrice').whereInIds(products).getRawOne()
      const pgOrder = {
        ...pgOrderSelected,
        totalPrice,
        products
      }
      const pgOrderCreated = pgOrderRepo.create(pgOrder)
      await pgOrderRepo.createQueryBuilder()
        .relation(PgOrder, 'products')
        .of(pgOrderSelected)
        .addAndRemove(pgOrderCreated.products, pgOrderSelected.products)
      const pgOrderUpdated = await pgOrderRepo.save(pgOrder)
      if (pgOrderUpdated !== undefined) {
        const pgOrder = await pgOrderRepo.findOne(id)
        if (pgOrder !== undefined) {
          return {
            id: pgOrder.id ?? undefined,
            totalPrice: pgOrder.totalPrice ?? undefined,
            products: pgOrder.products ?? undefined
          }
        }
      }
    }
    //* /
  }

  async list (): Promise<DBListOrder.Output> {
    const pgOrderRepo = this.getRepository(PgOrder)
    const pgOrderList = pgOrderRepo.find()
    return (await pgOrderList).map(({ id, totalPrice, products }) => {
      return {
        id: id ?? undefined,
        totalPrice: totalPrice ?? undefined,
        products: products ?? undefined
      }
    })
  }

  async listOne ({ id }: DBListOneOrder.Input): Promise<DBListOneOrder.Output> {
    const pgOrderRepo = this.getRepository(PgOrder)
    const pgOrder = await pgOrderRepo.findOne(id)
    if (pgOrder !== undefined) {
      return {
        id: pgOrder.id ?? undefined,
        totalPrice: pgOrder.totalPrice ?? undefined,
        products: pgOrder.products ?? undefined
      }
    }
  }

  async delete ({ id }: DBListOneOrder.Input): Promise<DBListOneOrder.Output> {
    const pgOrderRepo = this.getRepository(PgOrder)
    const pgOrder = await pgOrderRepo.findOne(id)
    if (pgOrder !== undefined) {
      await pgOrderRepo.softDelete(id)
      return {
        id: pgOrder.id ?? undefined,
        totalPrice: pgOrder.totalPrice ?? undefined,
        products: pgOrder.products ?? undefined
      }
    }
  }
}

export interface DBCreateOrder {
  create: (input: DBCreateOrder.Input) => Promise<DBCreateOrder.Output>
}

export namespace DBCreateOrder {
  export type Input = {
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }
  export type Output = undefined | {
    id: string
    totalPrice: number
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }
}

export interface DBUpdateOrder {
  update: (input: DBUpdateOrder.Input) => Promise<DBUpdateOrder.Output>
}

export namespace DBUpdateOrder {
  export type Input = {
    id: string
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }
  export type Output = undefined | {
    id: string
    totalPrice: number
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }
}

export interface DBListOrder {
  list: () => Promise<DBListOrder.Output>
}

export namespace DBListOrder {
  export type Output = undefined | Array<{
    id: string
    totalPrice: number
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }>
}

export interface DBListOneOrder {
  listOne: (input: DBListOneOrder.Input) => Promise<DBListOneOrder.Output>
}

export namespace DBListOneOrder {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    id: string
    totalPrice: number
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }
}

export interface DBDeleteOrder {
  delete: (input: DBDeleteOrder.Input) => Promise<DBDeleteOrder.Output>
}

export namespace DBDeleteOrder {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    id: string
    totalPrice: number
    products: Array<{
      id: string
      name?: string
      price?: number
      category?: string
      deletedAt?: Date
    }>
  }
}

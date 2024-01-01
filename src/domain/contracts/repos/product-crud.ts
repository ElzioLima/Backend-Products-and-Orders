export interface DBCreateProduct {
  create: (input: DBCreateProduct.Input) => Promise<DBCreateProduct.Output>
}

export namespace DBCreateProduct {
  export type Input = {
    name: string
    price: number
    category: string
  }
  export type Output = undefined | {
    id: string
    name: string
    price: number
    category: string
  }
}

export interface DBUpdateProduct {
  update: (input: DBUpdateProduct.Input) => Promise<DBUpdateProduct.Output>
}

export namespace DBUpdateProduct {
  export type Input = {
    id: string
    name: string
    price: number
    category: string
  }
  export type Output = undefined | {
    id: string
    name: string
    price: number
    category: string
  }
}

export interface DBListProduct {
  list: () => Promise<DBListProduct.Output>
}

export namespace DBListProduct {
  export type Output = undefined | Array<{
    id: string
    name: string
    price: number
    category: string
  }>
}

export interface DBListOneProduct {
  listOne: (input: DBListOneProduct.Input) => Promise<DBListOneProduct.Output>
}

export namespace DBListOneProduct {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    id: string
    name: string
    price: number
    category: string
  }
}

export interface DBDeleteProduct {
  delete: (input: DBDeleteProduct.Input) => Promise<DBDeleteProduct.Output>
}

export namespace DBDeleteProduct {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    id: string
    name: string
    price: number
    category: string
  }
}

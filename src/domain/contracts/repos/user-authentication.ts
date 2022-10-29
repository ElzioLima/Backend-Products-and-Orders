export interface LoadAccountByEmailRepository {
  loadByEmail: (input: LoadAccountByEmailRepository.Input) => Promise<LoadAccountByEmailRepository.Output>
}

export namespace LoadAccountByEmailRepository {
  export type Input = {
    email: string
  }

  export type Output = {
    id: number
    email: string
    password: string
    token?: string | undefined
  } | undefined
}

export interface UpdateAccessTokenRepository {
  updateAccessToken: (input: UpdateAccessTokenRepository.Input) => Promise<UpdateAccessTokenRepository.Output>
}

export namespace UpdateAccessTokenRepository {
  export type Input = {
    id: number
    token: string
  }

  export type Output = void
}

export interface CreateUser {
  create: (input: CreateUser.Input) => Promise<CreateUser.Output>
}

export namespace CreateUser {
  export type Input = {
    email: string
    password: string
  }

  export type Output = {
    id: number
    email: string
    password: string
    token?: string | undefined
  } | undefined
}

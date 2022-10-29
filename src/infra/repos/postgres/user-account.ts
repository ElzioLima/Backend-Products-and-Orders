import { PgUser } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { LoadAccountByEmailRepository, UpdateAccessTokenRepository, CreateUser } from '@/domain/contracts/repos'

export class PgUserAccountRepository extends PgRepository implements LoadAccountByEmailRepository, UpdateAccessTokenRepository, CreateUser {
  async loadByEmail ({ email }: LoadAccountByEmailRepository.Input): Promise<LoadAccountByEmailRepository.Output> {
    const pgUserRepo = this.getRepository(PgUser)
    const pgUser = await pgUserRepo.findOne({ email })
    if (pgUser !== undefined) {
      return {
        id: pgUser.id,
        email: pgUser.email ?? undefined,
        password: pgUser.password ?? undefined,
        token: pgUser.token ?? undefined
      }
    }
  }

  async updateAccessToken ({ id, token }: UpdateAccessTokenRepository.Input): Promise<UpdateAccessTokenRepository.Output> {
    const pgUserRepo = this.getRepository(PgUser)
    await pgUserRepo.update(id, { token })
  }

  async create ({ email, password }: CreateUser.Input): Promise<CreateUser.Output> {
    const pgUserRepo = this.getRepository(PgUser)
    const pgUserCreated = pgUserRepo.create({ email, password })
    const pgUser = await pgUserRepo.save(pgUserCreated)
    return {
      id: pgUser.id ?? undefined,
      email: pgUser.email ?? undefined,
      password: pgUser.password ?? undefined,
      token: pgUser.token ?? undefined
    }
  }
}

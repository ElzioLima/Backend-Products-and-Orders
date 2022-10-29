import { makeBcryptAdapter, makeJwtTokenHandler } from '@/main/factories/infra/gateways'
import { makePgUserAccountRepo } from '@/main/factories/infra/repos/postgres'
import { setupUserAuthentication, UserAuthentication } from '@/domain/use-cases'

export const makeUserAuthentication = (): UserAuthentication => {
  return setupUserAuthentication(
    makePgUserAccountRepo(),
    makeJwtTokenHandler(),
    makeBcryptAdapter()
  )
}

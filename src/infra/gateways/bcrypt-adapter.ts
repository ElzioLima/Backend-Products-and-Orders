import { Hasher, HashComparer } from '@/domain/contracts/gateways'

import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  async hash ({ plaintext }: Hasher.Input): Promise<Hasher.Output> {
    const encrypted = await bcrypt.hash(plaintext, this.salt)
    return { encrypted }
  }

  async compare ({ plaintext, digest }: HashComparer.Input): Promise<HashComparer.Output> {
    const isCompared = await bcrypt.compare(plaintext, digest)
    return { isCompared }
  }
}

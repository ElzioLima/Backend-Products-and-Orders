import { DbTransaction } from '@/application/contracts'
import { Controller } from '@/application/controllers'
import { HttpResponse } from '@/application/helpers'

export abstract class DbTransactionController extends Controller {
  constructor (
    private readonly decoratee: Controller,
    private readonly db: DbTransaction
  ) {
    super()
  }

  override async handle (httpRequest: any): Promise<HttpResponse> {
    await this.db.openTransaction()
    try {
      const httpResponse = await this.decoratee.handle(httpRequest)
      await this.db.commit()
      return httpResponse
    } catch (error) {
      await this.db.rollback()
      throw error
    } finally {
      await this.db.closeTransaction()
    }
  }

}

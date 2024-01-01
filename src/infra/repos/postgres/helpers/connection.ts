import { DataSource, QueryRunner, Repository, ObjectType, ObjectLiteral } from 'typeorm';
import { ConnectionNotFoundError, TransactionNotFoundError } from '@/infra/repos/postgres/helpers';
import { DbTransaction } from '@/application/contracts';
import { AppDataSource } from '@/infra/repos/postgres/helpers/data-source'

export class PgConnection implements DbTransaction {
  private static instance?: PgConnection;
  private query?: QueryRunner;
  private static dataSource: DataSource;

  private constructor() {}

  static async initialize(): Promise<void> {
    PgConnection.dataSource = AppDataSource;
    PgConnection.instance = new PgConnection();
  }

  static getInstance(): PgConnection {
    if (!this.instance) {
      if (!this.dataSource) {
        throw new Error('DataSource is not initialized. Call initialize() first.');
      }
      this.instance = new PgConnection();
    }
    return this.instance;
  }

  async connect(): Promise<void> {
    if (!PgConnection.dataSource.isInitialized) {
      await PgConnection.dataSource.initialize();
    }
  }

  async disconnect(): Promise<void> {
    if (!PgConnection.dataSource.isInitialized) {
      throw new ConnectionNotFoundError();
    }
    await PgConnection.dataSource.destroy();
    this.query = undefined;
  }

  async openTransaction(): Promise<void> {
    this.query = PgConnection.dataSource.createQueryRunner();
    await this.query.startTransaction();
  }

  async closeTransaction(): Promise<void> {
    if (!this.query) {
      throw new TransactionNotFoundError();
    }
    await this.query.release();
    this.query = undefined;
  }

  async commit(): Promise<void> {
    if (!this.query) {
      throw new TransactionNotFoundError();
    }
    await this.query.commitTransaction();
  }

  async rollback(): Promise<void> {
    if (!this.query) {
      throw new TransactionNotFoundError();
    }
    await this.query.rollbackTransaction();
  }

  getRepository<Entity extends ObjectLiteral>(entity: ObjectType<Entity>): Repository<Entity> {
    if (!PgConnection.dataSource.isInitialized) {
      throw new ConnectionNotFoundError();
    }
    return PgConnection.dataSource.getRepository(entity);
  }
}

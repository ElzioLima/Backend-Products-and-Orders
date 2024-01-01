import { MigrationInterface, createConnection, QueryRunner, Table } from 'typeorm'
import { PgUser } from '@/infra/repos/postgres/entities'
import { BcryptAdapter } from '@/infra/gateways'

export class CreateUsers1666925026023 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'email',
            type: 'varchar(200)'
          },
          {
            name: 'password',
            type: 'varchar(200)'
          },
          {
            name: 'token',
            type: 'varchar(200)',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('users')
  }
}

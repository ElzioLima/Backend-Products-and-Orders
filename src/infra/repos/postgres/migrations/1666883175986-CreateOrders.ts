import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateOrders1666883175986 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'total_price',
            type: 'float'
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
    queryRunner.dropTable('orders')
  }
}

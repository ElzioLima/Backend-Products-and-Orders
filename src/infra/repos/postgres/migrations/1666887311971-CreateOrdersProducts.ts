import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateOrdersProducts1666887311971 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders_products',
        columns: [
          {
            name: 'order_id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'product_id',
            type: 'uuid',
            isPrimary: true
          }
        ],
        foreignKeys: [
          {
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders'
          },
          {
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products'
          }
        ]
      })
    ), true, true
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders_products', true, true)
  }
}

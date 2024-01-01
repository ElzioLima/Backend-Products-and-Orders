import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateProducts1666801753906 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar(200)'
          },
          {
            name: 'price',
            type: 'float'
          },
          {
            name: 'category',
            type: 'varchar(200)'
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true
          }
        ]
      })
    ), true, true
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products', true, true)
  }
}

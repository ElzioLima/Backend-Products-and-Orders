import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, DeleteDateColumn } from 'typeorm'
import { PgProduct } from './product'

@Entity({ name: 'orders' })
export class PgOrder {
  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Column({ name: "total_price", nullable: true })
  totalPrice!: number

  @ManyToMany(() => PgProduct, {
    eager: true
    })
  @JoinTable({
    name: "orders_products",
    joinColumn: {
    name: "order_id",
    referencedColumnName: "id"
    },
    inverseJoinColumn: {
    name: "product_id",
    referencedColumnName: "id"
    }
    })
  products!: PgProduct[]

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt?: Date
}

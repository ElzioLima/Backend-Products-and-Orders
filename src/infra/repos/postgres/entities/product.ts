import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToMany, JoinTable } from 'typeorm'
import { PgOrder } from './order'

@Entity({ name: 'products' })
export class PgProduct {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  price!: number

  @Column()
  category!: string

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date

  @ManyToMany(() => PgOrder)
  @JoinTable({
    name: "orders_products",
    })
  products!: PgOrder[]
}

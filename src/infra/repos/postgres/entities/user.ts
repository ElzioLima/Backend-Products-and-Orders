import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm'

@Entity({ name: 'users' })
export class PgUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  token?: string

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt?: Date
}

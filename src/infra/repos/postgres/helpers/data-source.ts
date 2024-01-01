import { DataSource } from "typeorm"
import { env } from '@/main/config/env'
import {
  PgUser,
  PgProduct,
  PgOrder
} from "@/infra/repos/postgres/entities"
import { CreateUsers1666925026023 } from "@/infra/repos/postgres/migrations/1666925026023-CreateUsers"
import { CreateProducts1666801753906 } from "@/infra/repos/postgres/migrations/1666801753906-CreateProducts"
import { CreateOrders1666883175986 } from "@/infra/repos/postgres/migrations/1666883175986-CreateOrders"
import { CreateOrdersProducts1666887311971 } from "@/infra/repos/postgres/migrations/1666887311971-CreateOrdersProducts"

export const AppDataSource = new DataSource(
    {
      type: 'postgres',
      host: env.dataSource.host,
      port: env.dataSource.port,
      username: env.dataSource.username,
      password: env.dataSource.password,
      database: env.dataSource.database,
      migrations: [
        CreateUsers1666925026023,
        CreateProducts1666801753906,
        CreateOrders1666883175986,
        CreateOrdersProducts1666887311971
      ],
      entities: [
        PgUser,
        PgProduct,
        PgOrder
      ],
      logging: false
    }
)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

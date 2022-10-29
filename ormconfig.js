module.exports = [
  {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: [
      `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/migrations/*.{js,ts}`
    ],
    entities: [
      `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/entities/index.{js,ts}`
    ],
    cli: {
      migrationsDir: `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/migrations/`
    }
  },
  {
    name: 'seed',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: [
      `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/seeds/*.{js,ts}`
    ],
    cli: {
      migrationsDir: `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/seeds/`
    }
  }
]

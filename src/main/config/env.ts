export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '',
    accessToken: process.env.FB_ACCESS_TOKEN ?? ''
  },
  s3: {
    accessKey: process.env.AWS_S3_ACCESS_KEY ?? '',
    secret: process.env.AWS_S3_SECRET ?? '',
    bucket: process.env.AWS_S3_BUCKET ?? ''
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'jk43h5jk43h5k34',
  dataSource: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 5432,
    username: process.env.DB_USERNAME ?? 'postgres',
    password: String(process.env.DB_PASSWORD) ?? 'postgres',
    database: process.env.DB_DATABASE ?? 'products-and-orders-clean-node-ts-api',
  }
}

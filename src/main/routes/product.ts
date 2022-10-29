import { adaptExpressRoute as adapt } from '@/main/adapters'
import {
  makeCreateProductController,
  makeListProductController,
  makeUpdateProductController,
  makeListOneProductController,
  makeDeleteProductController
} from '@/main/factories/application/controllers'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/product', auth, adapt(makeCreateProductController()))
  router.get('/product', auth, adapt(makeListProductController()))
  router.put('/product/:id', auth, adapt(makeUpdateProductController()))
  router.get('/product/:id', auth, adapt(makeListOneProductController()))
  router.delete('/product/:id', auth, adapt(makeDeleteProductController()))
}

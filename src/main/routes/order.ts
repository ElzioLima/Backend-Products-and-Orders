import { adaptExpressRoute as adapt } from '@/main/adapters'
import {
  makeCreateOrderController,
  makeListOrderController,
  makeUpdateOrderController,
  makeListOneOrderController,
  makeDeleteOrderController
} from '@/main/factories/application/controllers'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/order', auth, adapt(makeCreateOrderController()))
  router.get('/order', auth, adapt(makeListOrderController()))
  router.put('/order/:id', auth, adapt(makeUpdateOrderController()))
  router.get('/order/:id', auth, adapt(makeListOneOrderController()))
  router.delete('/order/:id', auth, adapt(makeDeleteOrderController()))
}

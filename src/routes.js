import { Router } from "express"
import { v4 } from 'uuid'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Jacquin',
    email: 'jacquin2@gmail.com',
    password_hash: '123abc456',
    admin: true,

  })

  return response.json(user)
})

export default routes

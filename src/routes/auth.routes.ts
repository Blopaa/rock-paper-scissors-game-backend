import {Router} from 'express'
const router = Router()

import * as AuthCtrl from '../controllers/auth.controllers'

router.post('/signup', AuthCtrl.signUp)

export default router
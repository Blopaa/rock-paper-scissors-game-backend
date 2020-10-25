import {Router} from 'express'
const router = Router()

import * as AuthCtrl from '../controllers/auth.controllers'

router.post('/signup', AuthCtrl.signUp)
router.post('/signin', AuthCtrl.signIn)

export default router
import {Router} from 'express'
const router = Router()

import * as AuthCtrl from '../controllers/auth.controllers'
import { verifyToken } from '../middlewares/verifyToken'

router.post('/signup', AuthCtrl.signUp)
router.post('/signin', AuthCtrl.signIn)
router.get('/user', verifyToken, AuthCtrl.getData)

export default router
import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { encryptPassword } from '../helpers/passwords'
import User from "../models/User"

export const signUp = async (req: Request, res: Response) => {
    try {
        const {username, email, password} = req.body
        console.log(req.body)
    
        const user = new User({
            username,
            email,
            password: await encryptPassword(password)
        })
    
        const savedUser = await user.save()
        
        const token = jwt.sign({id: savedUser._id}, process.env.SECRET || '', {
            expiresIn: 172400
        })

        return res.status(200).json(token)
        
    } catch(err) {
        return res.status(400).json({message: "the body sent is not valid"})
    }
}
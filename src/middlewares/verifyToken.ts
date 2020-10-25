import { NextFunction, Response } from "express";
import IRequest from "../types";
import jwt from 'jsonwebtoken'
import User from "../models/User";

interface Idecoded {
    id: string;
    iat: number;
    exp: number;
}

export const verifyToken = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header("auth-token")
        if(!token) return res.status(400).json({message: 'not a valid token'})

        const decoded =jwt.verify(token, process.env.SECRET || '') as Idecoded
        req.userId = decoded.id

       next()
    } catch (error) {
        
    }
}
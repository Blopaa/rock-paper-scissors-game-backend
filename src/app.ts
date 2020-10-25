import {config} from "dotenv"
config()

import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import http from 'http'
import socketIo, {Socket} from "socket.io"

const app: Application = express()
const server = http.createServer(app)


//routes imports
import userRoutes from './routes/auth.routes'

//settings
app.set('port', process.env.PORT || 5000)

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//routes
app.use("/api/auth", userRoutes)


export {app, server}
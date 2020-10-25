import {config} from "dotenv"
config()

import {description, name, version} from '../package.json'

import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import http from 'http'
import socketIo, {Socket} from "socket.io"

const app: Application = express()
const server = http.createServer(app)
const io = socketIo(server);

// socket
io.on("connection", (socket: Socket) => {
  socket.on("join", ({name}) => {
    socket.join(name)
    console.log(name)
  })
})

//routes imports
import userRoutes from './routes/auth.routes'

//settings
app.set('port', process.env.PORT || 5000)

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//routes
// app.use('/', (req: Request, res: Response) => {
//   res.json({
//     name,
//     version,
//     description
//   })
// })

app.use("/api/auth", userRoutes)


export {app, server}
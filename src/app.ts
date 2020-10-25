import {config} from "dotenv"
config()

import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app: Application = express()

//routes imports

//settings
app.set('port', process.env.PORT || 5000)

// middlewares
app.use(cors())
app.use(morgan("dev"))

//routes


export default app
import express from 'express'
import route from './Post'

const app: express.Application = express()

app.use('/posts', route)

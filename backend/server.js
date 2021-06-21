import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productsRoutes from './routes/productsRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})


app.use('/api/products', productsRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const DEV = process.env.NODE_ENV



app.listen(PORT, console.log(`Server running in ${DEV} mode on port ${PORT}`.yellow.bold))
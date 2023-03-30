require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./db/connect')
const port = process.env.PORT || 5000

const pro = require('./products.json')
const proModel = require('./models/products')

const productsRouter = require('./routes/products')

app.get('/', (req, res) => res.send('my first express app - hardcoder0620'))
app.get('/test', (req, res) => res.json(pro))

app.use('/api/products',productsRouter)

const start = async ()=>{
    try {
        await connectDb(process.env.mongo_Uri);
        app.listen(port, () => console.log(`Example appp listening on port ${port}!`))
    } catch (error) {
        console.log('error on start function',error)
        console.log('error on somewere plx find!!!')
    }
}
start()
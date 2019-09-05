const express = require('express')
const cors = require('cors')
const GenerationEnginer = require('./generation/engine')
const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation')

const app = express()
const engine = new GenerationEnginer()

app.locals.engine = engine

app.use(cors({ origin: 'http://locahost:1234' }))
app.use('/dragon', dragonRouter)
app.use('/generation', generationRouter)

app.use((err, req, res , next) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        type: 'error', message: err.message
    })
})

engine.start()

module.exports = app    
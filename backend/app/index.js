const express = require('express')
const GenerationEnginer = require('./generation/engine')

const app = express()
const engine = new GenerationEnginer()

engine.start()

app.get('/dragon/new', (req,res) => {
    res.json({
        dragon: engine.generation.newDragon()
    })
})

module.exports = app
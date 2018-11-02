const express = require('express')

const app = express()
app.use(express.static('public'))

app.listen(5556)

app.use('/locations', (req, res) => {
    res.json(['loc1', 'loc2'])
})

app.use('/weather/:locName', (req, res) => {
    console.log('REQUEST LOCATION NAME IS:', req.params.locName)
    res.json({ loc1: 44.5 })
})


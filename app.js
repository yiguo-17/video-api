
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express();
require('dotenv').config()


const videoGames = require('./routes/gameRoutes');


const port = process.env.PORT || 3000;

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/v1/games', videoGames);




app.listen(port, () => {
    console.log(`Listening on port ${port}`)

})

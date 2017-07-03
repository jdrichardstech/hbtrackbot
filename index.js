const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
	res.status(200).send('Hello Trackbot!')
})

app.listen(port, ()=>{
	console.log('Listening on port' + port)
} )

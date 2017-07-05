const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL, function(err, res){
  if(err){
    console.log('DB CONNECTION FAIL: ' + err)
  }else{
    console.log('DB CONNECTION SUCCESS: ' + process.env.DB_URL)
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
	res.status(200).send('Hello Trackbot!')
})

app.listen(port, ()=>{
	console.log('Listening on port' + port)
} )

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const routes = require('./routes/index')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, function(err, res){
  if(err){
    console.log('DB CONNECTION FAIL: ' + err)
  }else{
    console.log('TRACKBOT DATABASE LISTENING' )
  }
})
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)

app.listen(port, ()=>{
	console.log('Listening on port' + port)
} )
module.exports = app;

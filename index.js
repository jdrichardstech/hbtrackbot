const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const routes = require('./routes/index')
require('dotenv').config()



mongoose.connect(process.env.DB_URL_DEV, function(err, res){
  if(err){
    console.log('DB CONNECTION FAIL: ' + err)
  }else{
    console.log('DB CONNECTION SUCCESS: ' + process.env.DB_URL_DEV)
  }
})



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)


app.listen(port, ()=>{
	console.log('Listening on port' + port)
} )
module.exports = app;

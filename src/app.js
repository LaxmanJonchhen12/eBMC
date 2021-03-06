//pakages || modules importing
const express = require('express')
const path = require('path')
const hbs = require('hbs')


//Routs
const userloginRoute = require('./routers/userlogin')
const pageRendringRoute = require('./routers/pageRender')



//Paths
const publicPath = path.join(__dirname , '../public')
const templates = path.join(__dirname , '../templates')


const app = express()


//Engines for rendring
app.use(express.static(publicPath)) //for static files only


//handles bar set up
app.set('view engine', 'hbs'); //for hbs
app.set("views", templates);  //for custome hbs path 


//parsing body data
app.use(express.json())


//using routers
app.use(pageRendringRoute)
app.use(userloginRoute)




//listing port
app.listen(process.env.PORT , ()=>{
    console.log('App is listen on Port ' + process.env.PORT)
})

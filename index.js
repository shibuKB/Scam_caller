//****************** START OF THE FILE************************ */

//import express modules

const express= require('express');
const app= express();



// middleware

app.use(express.json()) 

app.use(express.urlencoded({ extended: true }))



// routers
const router = require('./routes/api.js')
app.use('/api', router)



//Starting the server...
app.listen(8080,function(){
    console.log('Server is running!');
}
)
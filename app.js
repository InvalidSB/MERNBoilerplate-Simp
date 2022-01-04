const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors");
const path = require('path')
const dotenv = require('dotenv')
// NOTE : if you have clone this boilerplate from github then you need to create a .env file that contains MURI and PORT .

const authroute= require('./routes/auth')

dotenv.config()
// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());



// const mongoUri = ''
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(process.env.MURI,connectionParams)
.then( () => {
    console.log('Successfuly Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})


app.use('/api/auth',authroute)



            
            
app.listen(process.env.PORT || 8080,()=>{
    console.log(`app is running on port ${process.env.PORT}`)
})
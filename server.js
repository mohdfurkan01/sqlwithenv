const express = require("express");
const app = express();
// const mysql = require("mysql");
 const dotenv = require("dotenv")
const my_database = require("./config/dbConnection");
const userprofile = require('./routes/userRoute');

app.use(express.json())

dotenv.config({ path: './config/.env'})

//import routes


app.use("api/v1", userprofile);

my_database.connect((error)=>{
    if(error){
        console.log('Error connecting to MySQL: ' + err.stack);
    }else{
        console.log('Connected to MySQL as id ' + my_database.threadId);
    }
});




app.listen(process.env.PORT, () => {
  console.log(`Server is runnong on port ${process.env.PORT}`);
});

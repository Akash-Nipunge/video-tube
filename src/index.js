import dotenv from 'dotenv'
dotenv.config();
import ConnectDatabase from './db/dbConnection.js';
import app from './app.js';
const port = process.env.PORT || 3000;
ConnectDatabase()
.then(()=>{
    app.listen(port,()=>{
        console.log("server is listening on port : ",port);
    })
})
.catch((error)=>console.log("database connection error ",error))
const express= require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 6000;
const userRouter = require("./Router/userApi")

app.use(express.json());

app.use("/api",userRouter);


app.listen(PORT,()=> {
    console.log(`The server is run on http://localhost:${PORT}`);
    
})

mongoose.connect("mongodb+srv://rathorenisha397_db_user:FyD450e9i4dRHZyD@userdata.x6f1kdi.mongodb.net/").then(() => {
    console.log("Connected to mongoDB");
    
})
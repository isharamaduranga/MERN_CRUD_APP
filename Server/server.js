/**Import and require express , Mongoose to app*/
const express =  require("express");
//To communicate MongoDB through mongoose
const mongoose =  require("mongoose");

/**Invoked express to app*/
const APP = express();

/** Declare Unique PORT */
const PORT = 8000;

/** Declare Url variable */
const DB_URL = 'mongodb+srv://ishara:ishara1234@item-crud-app.rope5xb.mongodb.net/item-crud-App?retryWrites=true&w=majority'

/** The app is listened using Port */
APP.listen(PORT, ()=>{
    console.log(`App is Running on ${PORT}`);
});

/** Create database Connection Using MongoDB */
mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB Connected Successfully");
}).catch((err)=>{
    console.log("DB connection error "+err)
})
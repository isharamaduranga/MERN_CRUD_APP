/**Import and require express , Mongoose to app*/
/** To communicate MongoDB through mongoose */
/** Import body-parser for json convert js object */
//Import Routes
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const postRoutes = require("./Routes/posts")


/**Invoked express to app*/
const app = express();

/** Defined App Middlewares */
app.use(bodyParser.json());
app.use(postRoutes);

/** Declare Unique PORT */
const PORT = 8000;
/** Declare Url variable */
const DB_URL = 'mongodb+srv://ishara:ishara1234@item-crud-app.rope5xb.mongodb.net/item-crud-App?retryWrites=true&w=majority';


/** Create database Connection Using MongoDB */
mongoose.connect(DB_URL).then(() => {
        console.log("DB Connected Successfully");

    }).catch((err) => {

    console.log("DB connection error " + err)

});


/** The app is listened using Port */
app.listen(PORT, () => {
    console.log(`App is Running on ${PORT}`);
});



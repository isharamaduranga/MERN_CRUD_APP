/**Import and require express , Mongoose to app*/
const express = require("express");

/** To communicate MongoDB through mongoose */
const mongoose = require("mongoose");

/** Import body-parser for json convert js object */
const bodyParser = require("body-parser")

/** Import CORS for fix Cross policy issues  */
const cors = require('cors')

//Import Routes
const itemRoutes = require("./Routes/items")

/**Invoked express to app*/
const app = express();

/** Defined App Middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(itemRoutes);



/** Declare Unique PORT */
const PORT = 8000;
/** Declare Url variable */
const DB_URL = 'mongodb+srv://ishara:ishara1234@item-crud-app.rope5xb.mongodb.net/item-crud-App?retryWrites=true&w=majority';


/** Create database Connection Using MongoDB */
mongoose.connect(DB_URL)
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((err) => {
    console.log("DB connection error " + err)
    });


/** The app is listened using Port */
app.listen(PORT, () => {
    console.log(`App is Running on ${PORT}`);
});



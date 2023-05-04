/**Import and  require express to app*/
const express =  require("express");

/**Invoked express to app*/
const app = express();

/** Declare Unique PORT */
const port = 8000;

/** The app is listened using Port */
app.listen(port, ()=>{
    console.log(`App is Running on ${port}`);
});


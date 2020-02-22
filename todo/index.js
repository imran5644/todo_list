const express = require("express");
const port = 8000;

const app = express();
const db = require('./config/mongoose');


app.use(express.urlencoded());
app.use(express.static('./assets'));


app.use('/', require('./routes/home'));


app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, (err) => {

if(err){
    console.log(`error in running on port: ${port}`);
    return;
    }
     console.log(`server is running on port: ${port}`);
});


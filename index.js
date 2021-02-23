const express = require('express');
const app = express();
const ejs = require('ejs'); 
const portNumber = 3000;

app.use('/static/', express.static('static'));

app.set('view engine', 'ejs');


app.get("/", (req, res, next) => {
    res.render("pages/home");
});

app.listen(portNumber, function(){
    console.log("App started on localhost:" + portNumber);
});
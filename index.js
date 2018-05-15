const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


console.log("App started at " , new Date().toLocaleString());
app.get('/',(req,res) => {
    res.render('form');
});


app.listen(3000);
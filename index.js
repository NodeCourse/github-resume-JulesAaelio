const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise-native');
const Request = request.defaults({
        json: true,
        headers: {
            'User-Agent':"JulesAaelio"
        }
    });
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

app.get('/resume',(req,res) => {
    console.log(req.query.username);
   if(req.query.username) {
        Request.get({
            url: 'https://api.github.com/users/'+req.query.username
        }).then(r => {
            console.log(r);
            res.render('resume',{
                user: r
            });
        })
   }
});


app.listen(3000);
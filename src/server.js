'use strict';

const express = require('express');
const app = express();

const error404 = require('./handlers/404');
const error500 = require('./handlers/500');

const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

const Clothes = require('./routes/clothes');
const Food = require('./routes/food');


app.use(express.json());

app.use(logger);
app.use(validator);

app.use(Clothes);
app.use(Food);





app.get('/badConnection', (req,res,next)=> {
    next('Something WENT WRONG!');
})

app.use('*',  error404);
app.use(error500);

function start(){
    app.listen(port , ()=> console.log(`server started on port :${process.env.PORT}`)
    )
}

module.exports = {
    server: app,
    start
}
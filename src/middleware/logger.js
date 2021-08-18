'use strict';
module.exports = (req,res,next) =>{
console.log(`THIS FROM THE LOGGER MIDDLIWARE : PATH ${req.path} AND THE METHOD ${req.method}`);
next();
}
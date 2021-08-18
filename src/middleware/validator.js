'use strict';
module.exports = (error, req, res, next) => {
    if (req.query.name !== undefined) {
        next();
    } else {
        next('Enter your name!');
    }
}
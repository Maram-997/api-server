'use strict';

module.exports = (req,res) => {
res.status(404).send({
    status: 404,
    message: 'Page NOT FOUND.',
    route: req.route

})
}  
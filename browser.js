var request = require('postman-request');
var poly = require('polymorphic-request').request(request, window.FormData);
module.exports = poly;
module.exports.default = poly;
module.exports.request = poly;

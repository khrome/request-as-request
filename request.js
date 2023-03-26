var request = require('postman-request');
var formData = require('form-data');
var poly = require('polymorphic-request').request(request, formData);
module.exports = poly;
module.exports.default = poly;
module.exports.request = poly;

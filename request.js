var request = require('request');
var formData = require('form-data');
var request = require('polymorphic-request').request(request, formData);
module.exports = request;
module.exports.default = request;
module.exports.request = request;

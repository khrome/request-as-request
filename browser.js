var request = require('request');
var request = require('polymorphic-request').request(request, window.FormData);
module.exports = request;
module.exports.default = request;
module.exports.request = request;

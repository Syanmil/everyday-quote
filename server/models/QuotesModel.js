var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var QuotesSchema = new Schema({

module.exports = mongoose.model('Quotes', QuotesSchema);
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var QuotesSchema = new Schema({	'quote' : String,	'author' : String,	'source' : String});

module.exports = mongoose.model('Quotes', QuotesSchema);

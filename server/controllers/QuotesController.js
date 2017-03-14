var QuotesModel = require('../models/QuotesModel.js');

module.exports = {
  random: (req, res) => {
    QuotesModel.find(function (err, Quotess) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Quotes.',
	        error: err
        });
      }
      return res.json(Quotess[Math.floor(Math.random()*Quotess.length)]);
    });
  },
  list: function (req, res) {
    QuotesModel.find(function (err, Quotess) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Quotes.',
	        error: err
        });
      }
      return res.json(Quotess);
    });
  },
  show: function (req, res) {
    var id = req.params.id;
    QuotesModel.findOne({_id: id}, function (err, Quotes) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Quotes.',
          error: err
        });
      }
      if (!Quotes) {
        return res.status(404).json({
          message: 'No such Quotes'
        });
      }
      return res.json(Quotes);
    });
  },
  create: function (req, res) {
    var Quotes = new QuotesModel({    	quote : req.body.quote,    	author : req.body.author,    	source : req.body.source
    });
    Quotes.save(function (err, Quotes) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Quotes',
          error: err
        });
      }
      return res.status(201).json(Quotes);
    });
  },
  update: function (req, res) {
    var id = req.params.id;
    QuotesModel.findOne({_id: id}, function (err, Quotes) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Quotes',
          error: err
        });
      }
      if (!Quotes) {
        return res.status(404).json({
          message: 'No such Quotes'
        });
      }
      Quotes.quote = req.body.quote ? req.body.quote : Quotes.quote;
  	  Quotes.author = req.body.author ? req.body.author : Quotes.author;  	  Quotes.source = req.body.source ? req.body.source : Quotes.source;      Quotes.save(function (err, Quotes) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Quotes.',
            error: err
          });
        }
        return res.json(Quotes);
      });
    });
  },
  remove: function (req, res) {
    var id = req.params.id;
    QuotesModel.findByIdAndRemove(id, function (err, Quotes) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Quotes.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};

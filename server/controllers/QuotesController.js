var QuotesModel = require('../models/QuotesModel.js');

module.exports = {
  seeder: function(req, res) {
    let seedData = [
      {
        "quote": "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
        "author": "Carl Jung",
      },
      {
        "quote": "Through play, children learn to master their fears, assert their needs, process and cope with their emotions, and learn to get along with others.",
        "author": "Katie Hurley ",
      },
      {
        "quote": "The single most important factor that accelerates aging is negativity—our own and other people’s",
        "author": "",
      },
      {
        "quote": "Creativity is the habit of continually doing things in new ways to make a positive difference to our life",
        "author": "",
      },
      {
        "quote": "sembunyikanlah Allah di hadapan manusia namun jangan sembunyikan manusia di hadapan Allah, berharaplah pada Allah karena kamu membantu manusia, janganlah berharap kepada manusia karena menolong agama Allah.",
        "author": "",
      },
      {
        "quote": "kematian tidak perlu alasan",
        "author": "",
      },
      {
        "quote": "Computers are useless. They can only give you answers.",
        "author": "Pablo Picasso",
      },
      {
        "quote": "You can learn a lot from your mistakes when you aren’t busy denying them.",
        "author": "TW",
      },
      {
        "quote": "A candle loses nothing by lighting another candle.",
        "author": "Jayson Gaignard",
      },
      {
        "quote": "It is impossible for anyone to begin to learn that which he thinks he already knows.",
        "author": "Epictetus, Stoic philosopher.",
      }
    ]
    QuotesModel.create(seedData, function(err, data){
      if(err){console.log(err)}
      res.send(data)
    })
  },
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

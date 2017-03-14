var QuotesModel = require('./models/QuotesModel.js');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/everydayQuote')

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
// function seed(data) {
QuotesModel.insertMany(seedData)
//   return
// }
// seed(seedData)

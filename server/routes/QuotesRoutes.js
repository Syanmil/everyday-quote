var express = require('express');
var router = express.Router();
var QuotesController = require('../controllers/QuotesController.js');

router.get('/random', QuotesController.random)
router.get('/', QuotesController.list);
router.get('/:id', QuotesController.show);
router.post('/', QuotesController.create);
router.put('/:id', QuotesController.update);
router.delete('/:id', QuotesController.remove);

module.exports = router;

var express = require('express');
var router = express.Router();
var QuotesController = require('../controllers/QuotesController.js');

/*
 * GET
 */
router.get('/', QuotesController.list);

/*
 * GET
 */
router.get('/:id', QuotesController.show);

/*
 * POST
 */
router.post('/', QuotesController.create);

/*
 * PUT
 */
router.put('/:id', QuotesController.update);

/*
 * DELETE
 */
router.delete('/:id', QuotesController.remove);

module.exports = router;

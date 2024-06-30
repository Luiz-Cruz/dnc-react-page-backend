const express = require('express');
const specialitiesController = require('../controller/specialities.controler');

const router = express.Router();

router.post('/', specialitiesController.create);
router.get('/', specialitiesController.getAll);

module.exports = router;

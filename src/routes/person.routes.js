const express = require('express');
const personController = require('../controller/person.controler');

const router = express.Router();

router.get('/', personController.getAll);

module.exports = router;

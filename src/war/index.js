'use strict';

const router = require('express').Router();
const routes = require('./routes')

router.use('/war', routes)

module.exports = router
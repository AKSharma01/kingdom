'use strict';

const router = require('express').Router();
const route_1_1 = require('./route1.1')

router.use('/v1.1', route_1_1)

module.exports = router
'use strict';

const router = require('express').Router();
const controller = require('../controllers')

router.use('/falcon/attack/toucan', controller.falconAttackToucan)

module.exports = router
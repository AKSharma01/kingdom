'use strict';

const router = require('express').Router();
const controller = require('../controllers')
const { check, body } = require('express-validator');

router.use('/falcon/attack/toucan', [
	body("H").not().toInt({
		gt: 0
	}),
	body("E").not().toInt({
		gt: 0
	}),
	body("AT").not().toInt({
		gt: 0
	}),
	body("SG").not().toInt({
		gt: 0
	}),
], controller.falconAttackToucan)

module.exports = router
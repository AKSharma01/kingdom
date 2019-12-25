'use strict';

const router = require("express").Router()

const warRouter = require("./war")

router.use(warRouter)

module.exports = router
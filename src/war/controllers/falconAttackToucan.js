'use strict';

const {
	response,
	constants
} = require(`${rootDir}/utils`)
const helpers = require("../helpers")

const falconAttackToucan = async(req, res, next) => {
	const Response = new response(res)
	try{
		const option = {
			armyA: await helpers.findArmy("Army A"),
			armyB: await helpers.findArmy("Army B"),
			strength: await helpers.empireStrength(armyA.id, armyB.id)
		}

		await compute(req.body, option)
		Response.success(constants.SUCCESS_200.STATUS, "result", {})
	}catch(error){
		let statusCode = error.statusCode? error.statusCode: constants.ERROR_417.STATUS,
			message = error.message? error.message: constants.ERROR_417.MESSAGE;
		Response.failed(statusCode, message, error.hint)
	}
}


const compute = async(requestBody, option) => {
	try{
		
	}catch(error){
		throw(error)
	}
}




module.exports = falconAttackToucan
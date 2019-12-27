'use strict';

const {
	response,
	constants
} = require(`${rootDir}/utils`)
const helpers = require("../helpers")
const { validationResult } = require('express-validator')

const falconAttackToucan = async(req, res, next) => {
	const Response = new response(res)
	try{

		const option = {
			armyA: await helpers.findArmy("Army A"),
			armyB: await helpers.findArmy("Army B"),
		}
		option.strength = await helpers.empireStrength(option.armyA.id, option.armyB.id)
		await validateInputBody(req.body, option.armyB.battalions)
		const computed = await compute(req.body, option)
		const message = computed.message
		delete computed['message']
		Response.success(constants.SUCCESS_200.STATUS, message, computed.availableBattalion)
	}catch(error){
		console.log("error_falconAttackToucan: ", error.message)
		// console.log("error_falconAttackToucan: ", error)
		let statusCode = error.statusCode? error.statusCode: constants.ERROR_417.STATUS,
			message = error.message? error.message: constants.ERROR_417.MESSAGE;
		Response.failed(statusCode, message, error.hint)
	}
}


const validateInputBody = async(requestBody, armyB) =>{
	try{
		const errorList = []
		Object.keys(requestBody).forEach((battalionName)=>{
			armyB.find((army)=>{
				if(army.abbv.toUpperCase() == battalionName.toUpperCase())
					if(army.max_limit > requestBody[battalionName])
						console.log(`input correct for battalion ${battalionName}`)
					else
						errorList.push({
							message: `input overflow for battalion ${battalionName}`
						})
			})
		})
		if(errorList.length)
			throw({
				message: errorList
			})
	}catch(error){
		throw(error)
	}
}



const compute = async(requestBody, option) => {
	try{
		let battalionPriority = {
			H: 0,
			E: 1,
			AT: 2,
			SG: 3
		}
		let availableBattalion = {
			H: battalion(option.armyA.battalions, "H").max_limit,
			E: battalion(option.armyA.battalions, "E").max_limit,
			AT: battalion(option.armyA.battalions, "AT").max_limit,
			SG: battalion(option.armyA.battalions, "SG").max_limit,
		}

		// console.log("option.armyA.battalions: ", option.armyA.battalions)
		console.log("availableBattalion: ", availableBattalion)
		console.log("availableBattalion.H - Math.ceil(requestBody.H/2): ", availableBattalion.H - Math.ceil(requestBody.H/2))
		console.log("availableBattalion.H: ", availableBattalion.H)
		console.log("Math.ceil(requestBody.H/2): ", Math.ceil(requestBody.H/2))

		availableBattalion.H = availableBattalion.H - Math.ceil(requestBody.H/2)
		availableBattalion.E = availableBattalion.E - Math.ceil(requestBody.E/2)
		availableBattalion.AT = availableBattalion.AT - Math.ceil(requestBody.AT/2)
		availableBattalion.SG = availableBattalion.SG - Math.ceil(requestBody.SG/2)
		
		console.log("availableBattalion: ", availableBattalion)
		let win = true

		Object.keys(availableBattalion).forEach((battalion) => {
			if(availableBattalion[battalion]<0)
				if(!replaceBattalion(availableBattalion, battalion))
					win = false
		})
		if(win){
			console.log("celebrate: ", availableBattalion)
		}
		fightWithArmy(availableBattalion, option.armyA.battalions)
		return {
			message: win? "WIN": "LOSE",
			availableBattalion
		}
	}catch(error){
		throw(error)
	}
}

const battalion = (army, abbv) => {
	return army.find((obj) => {
		if(obj.abbv==abbv)
			return obj
	})
}


const replaceBattalion = (availableBattalion, battalion) => {
	let adjcentBattalions 
	switch(battalion){
		case 'H':
			adjcentBattalions = [{
				battalion: 'E',
				divide: true
			}]
			break;
		case 'E':
			adjcentBattalions = [{
				battalion: 'H',
				divide: false
			}, {
				battalion: 'AT',
				divide: true
			}]
			break;
		case 'AT':
			adjcentBattalions = [{
				battalion: 'E',
				divide: false
			}, {
				battalion: 'SG',
				divide: true
			}]
			break;
		case 'SG':
			adjcentBattalions = [{
				battalion: 'AT',
				divide: false
			}]
	}
	let stillNegetive = true
	adjcentBattalions.forEach((operation) => {
		// availableBattalion[battalion]
		let available;
		if(stillNegetive){
			if(operation.divide)
				available = Math.ceil(Math.abs(availableBattalion[battalion])/2)
			else
				available = Math.ceil(Math.abs(availableBattalion[battalion])*2)
			if(available <= availableBattalion[operation.battalion]){
				console.log("replacement")
				availableBattalion[operation.battalion] = availableBattalion[operation.battalion] - available
				let addup = operation.divide? available*2: available/2
				availableBattalion[battalion] += addup
			}
			else if(availableBattalion[operation.battalion]){
				console.log("partial replacement")
				let addup = operation.divide? availableBattalion[operation.battalion]/2: availableBattalion[operation.battalion]*2
				availableBattalion[battalion] += addup
				availableBattalion[operation.battalion] -= availableBattalion[operation.battalion]
			}else
				console.log("no replacement")
			if(availableBattalion[battalion]>=0){
				availableBattalion[battalion] = 0
				stillNegetive = false
			}
		}
	})
	console.log("availableBattalion: ", availableBattalion)
	return !stillNegetive
}


const fightWithArmy = (availableBattalion, army) => {
	Object.keys(availableBattalion).forEach((key) => {
		let battalionMaxCapacity = battalion(army, key).max_limit
		if(availableBattalion[key]>=0)
			availableBattalion[key] = battalionMaxCapacity-availableBattalion[key]
		else
			availableBattalion[key] = battalionMaxCapacity
	})
	return
}



module.exports = falconAttackToucan
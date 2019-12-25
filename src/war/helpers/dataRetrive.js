'use strict';

const psqlDB = require(`${rootDir}/utils/psqlDB`)
const psqlDBRead = require(`${rootDir}/utils/psqlDBRead`)
const constants = require(`${rootDir}/utils/constants`)

const Op = psqlDBRead.Sequelize.Op;

const findArmy = async(name) => {
	try{
		const empireObject = await psqlDBRead[constants.EMPIRE_TABLE].findOne({
			where: {
				name: name,
				is_delete: false
			}
		})

		if(!empireObject)
			throw({
				message: `army ${name} not found`
			})

		empireObject.battalions = await empireBattalions(empireObject.id)

		return empireObject
	}catch(error){
		throw(error)
	}
}


const empireBattalions = async(empireId) => {
	try{
		return await psqlDBRead[constants.BATTALION_TABLE].findAll({
			where: {
				army_id: empireId,
				is_delete: false
			}
		})
	}catch(error) {
		throw(error)
	}
}


const empireStrength = async(dominantEmpireId, submissiveEmpireId) => {
	try{
		return await psqlDBRead[constants.ARMY_STRENGTH_TABLE].findAll({
			where: {
				dominant_army_id: dominantEmpireId,
				submissive_army_id: submissiveEmpireId,
				is_delete: false
			}
		})
	}catch(error){
		throw(error)
	}
}



module.exports = {
	findArmy,
	empireStrength
}
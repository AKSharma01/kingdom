'use strict';


const constants = require(`${rootDir}/utils/constants`);

const Record = (sequelize, DataTypes) => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		request_body: {
			type: DataTypes.JSON,
			allowNull: false
		},
		result: {
			type: DataTypes.ENUM(constants.WIN, constants.LOSE),
			allowNull: false
		},
		request_details: {
			type: DataTypes.JSON,
			allowNull: false
		},
		output: {
			type: DataTypes.JSON,
			allowNull: false
		},
		is_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			set(value){
				if(value)
					this.setDataValue('deletedAt', new Date())
			}
		},
		deletedAt: {
			type: DataTypes.DATETIME,
			allowNull: true
		}
	}

	const options = {
		freezeTableName: true
	}

	const record = sequelize.define(constants.RECORD_TABLE, attributes, options)
	return record;
}


module.exports = Record
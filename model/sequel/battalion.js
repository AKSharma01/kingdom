'use strict';


const constants = require(`${rootDir}/utils/constants`);

const Battalion = (sequelize, DataTypes) => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		abbv: {
			type: DataTypes.STRING,
			allowNull: false
		},
		max_limit: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		army_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		is_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			set(value){
				this.setDataValue('is_delete', value);
				// if(value)
				// 	this.setDataValue('deletedAt', new Date())
			}
		},
		// deletedAt: {
		// 	type: DataTypes.DATETIME,
		// 	allowNull: true
		// }
	}

	const options = {
		freezeTableName: true
	}

	const battalion = sequelize.define(constants.BATTALION_TABLE, attributes, options)

	// battalion.associations = (db) => {
	// 	battalion.belongsTo(db[constants.EMPIRE_TABLE], { foreignKey: 'army_id'});
	// };
	return battalion;
}


module.exports = Battalion
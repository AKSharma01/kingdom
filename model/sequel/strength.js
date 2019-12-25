'use strict';


const constants = require(`${rootDir}/utils/constants`);

const ArmyStrength = (sequelize, DataTypes) => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		strength: {
			type: DataTypes.INTEGER,
			allowNull: false,
			set(value){
				if(!value || value <0)
					throw({
						message: "strength value can't be undefined or zero(0) or negetive"
					})
				else
					this.setDataValue('strength', value)
			}
		},
		dominant_army_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		submissive_army_id: {
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

	const armyStrength = sequelize.define(constants.ARMY_STRENGTH_TABLE, attributes, options)

	// armyStrength.associations = (db) => {
	// 	armyStrength.belongsToMany(db[constants.EMPIRE_TABLE], {
	// 		as: 'army_1',
	// 		through: constants.ARMY_STRENGTH_TABLE,
	// 		foreignKey: 'dominant_army_id'
	// 	});
	// 	armyStrength.belongsToMany(db[constants.EMPIRE_TABLE], {
	// 		as: 'army_2',
	// 		through: constants.ARMY_STRENGTH_TABLE,
	// 		foreignKey: 'submissive_army_id'
	// 	});
	// };
	return armyStrength;
}


module.exports = ArmyStrength
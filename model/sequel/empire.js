'use strict';


const constants = require(`${rootDir}/utils/constants`);

const Empire = (sequelize, DataTypes) => {
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
			allowNull: false,
			validate: {
				is_special_char: function(value) {
					if(!(/[$#@^!&+=\|';:.><?/]/.test(value)))
						throw new Error('No Special characters are allowed!')
					return true
				}
			}
		},
		king_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			validate: {
				is_special_char: function(value) {
					if(!(/[$#@^!&+=\|';:.><?/]/.test(value)))
						throw new Error('No Special characters are allowed!')
					return true
				}
			}
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

	// const relations = {
	// 	associate: function(models){
	// 		console.log("hasdfahisfbdkagsyidfhujggvjbhk")
	// 		empire.hasMany(constants.BATTALION_TABLE, {
	// 			foreignKey: 'army_id',
	// 			onDelete: 'cascade'
	// 		});
	// 	}
	// }

	const options = {
		freezeTableName: true,
		// classMethods: relations
	}

	const empire = sequelize.define(constants.EMPIRE_TABLE, attributes, options)

	// empire.associations = (db) => {
	// 	empire.hasOne(constants.BATTALION_TABLE, {
	// 		foreignKey: 'army_id',
	// 		onDelete: 'cascade'
	// 	})
	// }
	return empire;
}


module.exports = Empire
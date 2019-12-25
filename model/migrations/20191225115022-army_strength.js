'use strict';


const constants = require(`${sequelizePath}/constants`);

module.exports = {
  up: async(queryInterface, Sequelize) => {

    const attributes = {
      id: {primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, unique: true},
      strength: {type: Sequelize.INTEGER, allowNull: false},
      dominant_army_id: {type: Sequelize.INTEGER, allowNull: false},
      submissive_army_id: {type: Sequelize.INTEGER, allowNull: false},
      is_delete: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
      deletedAt: {type: Sequelize.DATE(3), allowNull: true},
      createdAt: {type: Sequelize.DATE(3), allowNull: false},
      updatedAt: {type: Sequelize.DATE(3), allowNull: false}
    }
    return await queryInterface.createTable(constants.ARMY_STRENGTH_TABLE, attributes);

  },

  down: async(queryInterface, Sequelize) => {
    return await queryInterface.dropTable(constants.ARMY_STRENGTH_TABLE);
  }
};

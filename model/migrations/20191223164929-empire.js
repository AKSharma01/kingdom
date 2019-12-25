'use strict';


const constants = require(`${sequelizePath}/constants`);

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const attributes = {
      id: {primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, unique: true},
      name: {type: Sequelize.STRING(100), allowNull: false},
      king_name: {type: Sequelize.STRING(100), allowNull: false},
      is_delete: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
      deletedAt: {type: Sequelize.DATE(3), allowNull: true},
      createdAt: {type: Sequelize.DATE(3), allowNull: false},
      updatedAt: {type: Sequelize.DATE(3), allowNull: false}
    }
    return await queryInterface.createTable(constants.EMPIRE_TABLE, attributes);
  },

  down: async(queryInterface, Sequelize) => {
    return await queryInterface.dropTable(constants.EMPIRE_TABLE)
  }
};

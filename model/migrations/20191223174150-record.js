'use strict';

const constants = require(`${sequelizePath}/constants`);

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const attributes = {
      id: {primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, unique: true},
      request_body: {type: Sequelize.JSON, allowNull: false},
      request_details: {type: Sequelize.JSON, allowNull: false},
      result: {type: Sequelize.ENUM(constants.WIN, constants.LOSE), allowNull: false},
      output: {type: Sequelize.JSON, allowNull: false},
      is_delete: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
      deletedAt: {type: Sequelize.DATE(3), allowNull: true},
      createdAt: {type: Sequelize.DATE(3), allowNull: false},
      updatedAt: {type: Sequelize.DATE(3), allowNull: false}
    }
    return queryInterface.createTable(constants.RECORD_TABLE, attributes);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable(constants.RECORD_TABLE);
  }
};

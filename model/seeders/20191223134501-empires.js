'use strict';


const constants = require(`${sequelizePath}/constants`);

module.exports = {
  up: (queryInterface, Sequelize) => {
    const empireList = [{
      name: 'Army A',
      king_name: 'King Toucan',
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Army B',
      king_name: 'King Falcon',
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert(constants.EMPIRE_TABLE, empireList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(constants.EMPIRE_TABLE, null, {});
  }
};

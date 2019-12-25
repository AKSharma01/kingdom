'use strict';

const constants = require(`${sequelizePath}/constants`);

const createArmyForeignKey = async(queryInterface) => {
  try{
    return await queryInterface.addConstraint(constants.BATTALION_TABLE, ['army_id'], {
      type: 'foreign key',
      name: 'army_id_battalion_fkey_constraint',
      references: {
        table: constants.EMPIRE_TABLE,
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  }catch(error){
    console.log("error_army_id_battalion_fkey_constraint: ", error.message)
    throw(error)
  }
}




module.exports = {
  up: async(queryInterface, Sequelize) => {

    await createArmyForeignKey(queryInterface)
  },

  down: async(queryInterface, Sequelize) => {

    await queryInterface.removeConstraint(constants.BATTALION_TABLE, 'army_id_battalion_fkey_constraint')
  }
};

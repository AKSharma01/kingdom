'use strict';

const constants = require(`${sequelizePath}/constants`);

const createDominantArmyForeignKey = async(queryInterface) => {
  try{
    return await queryInterface.addConstraint(constants.ARMY_STRENGTH_TABLE, ['dominant_army_id'], {
      type: 'foreign key',
      name: 'dominant_army_id_army_strength_fkey_constraint',
      references: {
        table: constants.EMPIRE_TABLE,
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  }catch(error){
    console.log("error_dominant_army_id_army_strength_fkey_constraint: ", error.message)
    throw(error)
  }
}


const createSubmissiveArmyForeignKey = async(queryInterface) => {
  try{
    return await queryInterface.addConstraint(constants.ARMY_STRENGTH_TABLE, ['submissive_army_id'], {
      type: 'foreign key',
      name: 'submissive_army_id_army_strength_fkey_constraint',
      references: {
        table: constants.EMPIRE_TABLE,
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  }catch(error){
    console.log("error_submissive_army_id_army_strength_fkey_constraint: ", error.message)
    throw(error)
  }
}



module.exports = {
  up: async(queryInterface, Sequelize) => {

    await createDominantArmyForeignKey(queryInterface)
    await createSubmissiveArmyForeignKey(queryInterface)
  },

  down: async(queryInterface, Sequelize) => {

    await queryInterface.removeConstraint(constants.ARMY_STRENGTH_TABLE, 'dominant_army_id_army_strength_fkey_constraint')
    await queryInterface.removeConstraint(constants.ARMY_STRENGTH_TABLE, 'submissive_army_id_army_strength_fkey_constraint')
  }
};

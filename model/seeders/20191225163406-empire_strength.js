'use strict';

const constants = require(`${sequelizePath}/constants`);

const setStrengthForEmpire1 = async(queryInterface) => {
  try{

    let amryA = (await queryInterface.sequelize.query(`
        select 
          * 
        from 
          ${constants.EMPIRE_TABLE} 
        where 
          "name" = 'Army A' and 
          "is_delete" = ${false}
      `))[0]

    if(amryA.length)
      amryA = amryA[0]
    else
      amryA = null

    if(!amryA)
      throw({
        message: "Army A not found. Please run the seeder to create Army"
      })

    let amryB = (await queryInterface.sequelize.query(`
        select 
          * 
        from 
          ${constants.EMPIRE_TABLE} 
        where 
          "name" = 'Army B' and 
          "is_delete" = ${false}
      `))[0]

    if(amryB.length)
      amryB = amryB[0]
    else
      amryB = null

    if(!amryB)
      throw({
        message: "Army B not found. Please run the seeder to create Army"
      })

    const bulkQuery = [{
      strength: 2,
      dominant_army_id: amryA.id,
      submissive_army_id: amryB.id,
      is_delete: false,
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert(constants.ARMY_STRENGTH_TABLE, bulkQuery)
    // const amryA = await queryInterface.findOne()
  }catch(error){
    throw(error)
  }
}



const removeStrengthForEmpire1 = async(queryInterface) => {
  try{

    let amryA = (await queryInterface.sequelize.query(`
        select 
          * 
        from 
          ${constants.EMPIRE_TABLE} 
        where 
          "name" = 'Army A' and 
          "is_delete" = ${false}
      `))[0]

    if(amryA.length)
      amryA = amryA[0]
    else
      amryA = null

    if(!amryA)
      throw({
        message: "Army A not found. Please run the seeder to create Army"
      })

    let amryB = (await queryInterface.sequelize.query(`
        select 
          * 
        from 
          ${constants.EMPIRE_TABLE} 
        where 
          "name" = 'Army B' and 
          "is_delete" = ${false}
      `))[0]

    if(amryB.length)
      amryB = amryB[0]
    else
      amryB = null

    if(!amryB)
      throw({
        message: "Army B not found. Please run the seeder to create Army"
      })


    const bulkQuery = [{
      dominant_army_id: amryA.id,
      submissive_army_id: amryB.id,
      is_delete: false
    }]
    console.log("bulkQuery: ", bulkQuery)
    await queryInterface.bulkDelete(constants.ARMY_STRENGTH_TABLE, bulkQuery)
  }catch(error){
    throw(error)
  }
}


module.exports = {
  up: async(queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    try{
      return await setStrengthForEmpire1(queryInterface)
    }catch(error){
      console.error("error_seed_strength_army: ", error.message)
      throw(error.message)
    }
  },

  down: async(queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    try{
      return await removeStrengthForEmpire1(queryInterface)
    }catch(error){
      console.error("error_seed_strength_army: ", error.message)
      throw(error.message)
    }
  }
};

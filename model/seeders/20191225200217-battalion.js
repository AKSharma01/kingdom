'use strict';

const constants = require(`${sequelizePath}/constants`);

const setBallationForEmpire1 = async(queryInterface) => {
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

    const bulkQuery = [{
      name: "Horses",
      abbv: "H",
      max_limit: 100,
      army_id: amryA.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Elephants",
      abbv: "E",
      max_limit: 50,
      army_id: amryA.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Armoured Tanks",
      abbv: "AT",
      max_limit: 10,
      army_id: amryA.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Sling Guns",
      abbv: "SG",
      max_limit: 5,
      army_id: amryA.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert(constants.BATTALION_TABLE, bulkQuery)
  }catch(error){
    throw(error)
  }
}


const setBallationForEmpire2 = async(queryInterface) => {
  try{

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
      name: "Horses",
      abbv: "H",
      max_limit: 300,
      army_id: amryB.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Elephants",
      abbv: "E",
      max_limit: 200,
      army_id: amryB.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Armoured Tanks",
      abbv: "AT",
      max_limit: 40,
      army_id: amryB.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Sling Guns",
      abbv: "SG",
      max_limit: 20,
      army_id: amryB.id,
      is_delete: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert(constants.BATTALION_TABLE, bulkQuery)
  }catch(error){
    throw(error)
  }
}




const removeBallalionForEmpire1 = async(queryInterface) => {
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


    const bulkQuery = [{
      army_id: amryA.id,
      is_delete: false
    }]
    console.log("bulkQuery: ", bulkQuery)
    await queryInterface.bulkDelete(constants.BATTALION_TABLE, bulkQuery)
  }catch(error){
    throw(error)
  }
}


const removeBallalionForEmpire2 = async(queryInterface) => {
  try{

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
      army_id: amryB.id,
      is_delete: false
    }]
    console.log("bulkQuery: ", bulkQuery)
    await queryInterface.bulkDelete(constants.BATTALION_TABLE, bulkQuery)
  }catch(error){
    throw(error)
  }
}




const setBallation = async(queryInterface) => {
  try{
    await setBallationForEmpire1(queryInterface)
    await setBallationForEmpire2(queryInterface)
  }catch(error){
    throw(error)
  }
}

const removeBallalion = async(queryInterface) => {
  try{
    await removeBallalionForEmpire1(queryInterface)
    await removeBallalionForEmpire2(queryInterface)
  }catch(error){
    throw(error)
  }
}

module.exports = {
  up: async(queryInterface, Sequelize) => {

    try{
      return await setBallation(queryInterface)
    }catch(error){
      console.error("error_seed_ballalion: ", error.message)
      throw(error.message)
    }
  },

  down: async(queryInterface, Sequelize) => {

    try{
      return await removeBallalion(queryInterface)
    }catch(error){
      console.error("error_seed_ballalion: ", error.message)
      throw(error.message)
    }
  }
};

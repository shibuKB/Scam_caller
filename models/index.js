const dbConfig = require('../dbConfig')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    
    database = dbConfig.DB,
    username = dbConfig.USER,
     password = dbConfig.PASS, {
    host: dbConfig.HOST,
    dialect: dbConfig.DBDILECT,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

  
  sequelize.authenticate()
  .then(() => {
      console.log('Database connection established successfully...')
  })
  .catch(err => {
      console.log('ErrorError connecting to the database:', err)
  })


//Define yo model

const db = {}


db.sequelize = sequelize

db.user = require('./userModel.js')(sequelize, DataTypes);

db.spammer= require('./spammerModel.js')(sequelize, DataTypes);


db.sequelize.sync({ force: false })
.then(() => {
    console.log('Models Synced with db')
})

module.exports = db;
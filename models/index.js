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
      console.log('connected..')
  })
  .catch(err => {
      console.log('Error'+ err)
  })


    const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./userModel.js')(sequelize, DataTypes);

db.spammer= require('./spammerModel.js')(sequelize, DataTypes);

sequelize.authenticate()
  .then(() => {
      console.log('connected..')
  })
  .catch(err => {
      console.log('Error'+ err)
  });

db.userCredential = require('./userCredentialModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('synced with db')
})

module.exports = db
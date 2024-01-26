module.exports =function (sequelize, DataTypes){

    //Defining table name Uidpass
    const userCredentialModel = sequelize.define('userCredential', {
        // Model attributes are defined here
    
       phoneNo:{
            type:DataTypes.STRING
        }
        ,
        pass: {
            type:DataTypes.STRING
        }
      })

      return userCredentialModel;
}
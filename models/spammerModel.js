module.exports = (sequelize, DataTypes)=>{
    
   const spammerModel = sequelize.define('spammer', {
   
    name: {
      type: DataTypes.STRING,
      
    },
    
    phoneNo:{
        type:DataTypes.STRING,
        allowNull: false
    }
});

return spammerModel;

}
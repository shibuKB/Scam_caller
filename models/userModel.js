module.exports = (sequelize , DataTypes)=>{

     //Defining table name User
     const userModel = sequelize.define('user', {
  
       name: {
          type: DataTypes.STRING,
          
        },

        phoneNo:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }

      
}) 
 return userModel;
}


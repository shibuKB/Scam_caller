module.exports = (sequelize , DataTypes)=>{

     //Defining table name User

     const userModel = sequelize.define('user', {
  
       name: {
          type: DataTypes.VARCHAR,
              
        },

        phone:{
            type:DataTypes.VARCHAR,
            allowNull:false,
        },
        email:{
            type:DataTypes.VARCHAR,
            validate:{isEmail:ture}
        },
        password:{
          type:DataTypes.VARCHAR
        },
        isSpam:{
          type:DataTypes.BOOLEAN,
          defaultValue:false
        },
        reportCount:{
          type:DataTypes.INTEGER,
          defaultValue:0
        }

      
}) 
 return userModel;
}


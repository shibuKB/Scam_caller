const db = require('../models');


const User= db.user;



//user registration

const regdUser = async (req, res) => {
  
    const { name, phoneNo, email, pass } = req.body;
    
            let [userData, isUserNew ] = await User.findOrCreate({
                where :{
                    name: req.body.name,
                },
                defaults:{

                    phoneNo:req.body.phoneNo,
            
                    email: req.body.email, 
                }
            }) 
            res.status(200).send(userData)
            console.log("got here, means sent data")

            console.log("next tabel entry start here")

           ; if (isUserNew){
        await newUser.create({
            phoneNo:req.body.phoneNo,
             pass : req.body.pass
        })
         res.status(200).send({message:"user created!"})
        console.log("this is in the if clause")
    }
    console.log("it is outside the if clause")
         
};


//Search user
const findUser= async (req, res)=>{
  
    let name= req.body.name
    let phoneNo= req.body.phoneNo


  let searchResult= await User.findAll({
        where:{
                [Op.or]: [
                            { name: name },
                            {phoneNo:phoneNo }
                        ]
             }
}                     )

res.status(200).send(searchResult);

};

// get a user data/ details
const getUser =async (req , res)=>{
    let id = req.params.id;
    let name =req.body.name;
    let phoneNo =req.body.phoneNo;
    
   let userDetail= await User.findOne({
        where :{
            id:id,[or]:[
                {name:name},
                {phoneNo:phoneNo}
            ]
        }
    })
    res.status(200).send(userDetail)
}

//export all to be use in routes

module.exports={
    regdUser,
    findUser,
    getUser
}
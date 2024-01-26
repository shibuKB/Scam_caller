//************** CONTROLLER TO ADD SPAMMER TO SPAMMER LIST ***************//

// import and use models

const db =require('../models')

const Spammer= db.spammer   //imported. db name should be same as table name and not model name

//add Spammer in list

const addSpammer = async (req, res) => {

   let spammerph= req.body.phoneNo;

    let spammer = await Spammer.create({phoneNo:spammerph});
    res.status(200).send({Message:"created!"})

}

//get spammer list
const getSpammer=async(req,res)=>{
    
   let spammerList = await Spammer.findAll({});
    
    res.status(200).send(spammerList);
}


//export functions to be used in controller

module.exports={
    addSpammer,
    getSpammer
}
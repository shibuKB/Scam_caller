
//***************************** ROUTES LIVES HERE ****************************** */

//import required modules from controller folder

const userController = require('../Controller/user.js')

const spammerController = require('../Controller/spammer.js')



// routers
const router = require('express').Router();

router.post('/addUser',userController.regdUser);

router.get('/findUser', userController.findUser)

router.get('/getUser',userController.getUser)

router.post('/addSpammer',spammerController.addSpammer)

router.get('/SpammersList',spammerController.getSpammer)



//export router to be use in index.js

module.exports = router;
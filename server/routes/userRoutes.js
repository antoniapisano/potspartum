const { registerUser, loginUser, getMe } = require ('../controllers/userController.js')
const express = require('express');
const router = express.Router();


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', /*protect,*/ getMe)

module.exports = router;
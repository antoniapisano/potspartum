const { registerUser, loginUser, getMe } = require ('../controllers/userController.ts')
const express = require('express');
const router = express.Router();
export {};

//const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', /*protect,*/ getMe)

module.exports = router;

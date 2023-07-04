//const { protect } = require('../middleware/authMiddleware')//
const { addBooking, getBooking, removeBooking, editBooking } = require('../controllers/BookingsController.ts')
const express = require('express');
const router = express.Router();
export {};

router.post('/', /*protect,*/ addBooking)
router.get('/', /*protect,*/ getBooking)
router.delete('/:id', /*protect,*/ removeBooking)
router.put('/:id', /*protect,*/ editBooking)

module.exports = router
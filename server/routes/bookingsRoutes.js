const { addBooking, getBooking, removeBooking, editBooking } = require('../controllers/BookingsController.js')
const express = require('express');
const router = express.Router();


router.post('/', /*protect,*/ addBooking)
router.get('/', /*protect,*/ getBooking)
router.delete('/:id', /*protect,*/ removeBooking)
router.put('/:id', /*protect,*/ editBooking)

module.exports = router
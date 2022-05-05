const express = require('express');
const {  newOrder, userOrder } = require('../controllers/order.controller');
const router = express.Router()


router.post("/order/new", newOrder);
router.get("/order/user", userOrder)


module.exports = router;
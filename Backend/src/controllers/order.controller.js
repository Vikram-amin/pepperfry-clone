const Order = require('../model/order.model')

const newOrder = async(req,res,next) => {
    try {
    const { addressInfo, orderItems,  paymentInfo,  itemsPrice,  taxPrice, shippingPrice, totalPrice, } = req.body;
            
    const order = await Order.create({
      addressInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });

        res.status(201).json({
        success: true,
        order,
    });

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const userOrder = async(req,res,next) => {
try {
        const orders = await Order.find({ user: req.user._id });
        res.status(200).json({
          success: true,
          orders,
        });
} catch (error) {
  res.status(500).json({message : error.message})
}
}

module.exports = {
  newOrder,
  userOrder,
};

const Product = require("../model/product.model");


const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Product
const getAllProducts = async (req, res, next) => {
  try {
  const product = await Product.find({});
  res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get product by id
const getProductDetail = async (req, res) => {
  try {
  const product = await Product.findById(req.params.id).lean().exec();
  res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// // update product - admin
const updateProduct = async (req, res, next) => {
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(201).json({ success: true, product });
};



// delete the product
const deleteProduct = async (req, res, next) => {
     await Products.findByIdAndDelete(req.params.id);
    return res.status(201).json({ success: true, message: "product delete succeefully" });
};

module.exports = {
  getAllProducts,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
};
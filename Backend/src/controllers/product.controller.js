
const Product = require("../model/product.model");
const constantObj = require("../commonLib/constant");
const APIfeatures = require("../utils/apiFeatures");


// Get All Product
const getAllProducts = async (req, res, next) => {
  try {
  const resultPerPage = 6;
  const productsCount = await Product.countDocuments()
  const apiFeatures = new APIfeatures(Product.find(),req.query).serarch().pagination(resultPerPage).filter()
  
  const products = await apiFeatures.query;
  let filteredProductsCount = products.length;

  res.status(200).json({
    success: true,
    message: constantObj.success.DATA_FETCH,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
  } catch (error) {
    res.status(500).json({
      message: error.message 
    });
  }
};


// create product
const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });

  } catch (error) {
    res.status(500).json({
       success: false,
       message: error.message 
  });
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
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({ success: true, message: "product delete succeefully" });
};

module.exports = {
  getAllProducts,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
};
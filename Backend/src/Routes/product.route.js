const express = require('express');
const router = express.Router()
const { createProduct, updateProduct, deleteProduct, getAllProducts, getProductDetail,} = require('../controllers/product.controller');
const { isAuthenticatedUser } = require('../middleware/authentication');

 
router.post('/products/new', createProduct)
router.get("/products", isAuthenticatedUser, getAllProducts);
router.get("/product/:id", getProductDetail);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
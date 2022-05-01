const express = require('express');
const router = express.Router()
const { createProduct, updateProduct, deleteProduct, getAllProducts, getProductDetail,} = require('../Controlers/product.controller')
 
router.post('/products/new', createProduct)
router.get("/products", getAllProducts);
router.get("/product/:id", getProductDetail);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
const express = require('express');

const router = express.Router();

const authRoute = require('./routes/auth.routes')
const productRoute = require('./routes/product.routes')


router.use('/auth', authRoute);
router.use('/product', productRoute);


module.exports = router
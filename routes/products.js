const express = require('express')

const router = express.Router()
const {getAllProducts,getAllShirts} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/shirts').get(getAllShirts)

module.exports = router
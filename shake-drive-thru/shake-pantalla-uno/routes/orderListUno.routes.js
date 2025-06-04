const { Router } = require('express');

const { postOrderListUno } = require("../controller/orderListUno.controller.js");

const router = Router();

router.post('/',  postOrderListUno );


module.exports = router;
const { Router } = require('express');

const { postOrderListDos } = require("../controller/orderListDos.controller.js");

const router = Router();

router.post('/',  postOrderListDos );


module.exports = router;
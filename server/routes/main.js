const express = require("express");
const router = express.Router();   //need to imoport for routes






router.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = router;

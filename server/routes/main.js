const express = require("express");
const router = express.Router(); //need to imoport for routes






router.get("/", (req, res) => {
  const locals = {
    title: "BlogNinja",
    description: "BlogNinja is a blog website Testing Page",
  };
  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;

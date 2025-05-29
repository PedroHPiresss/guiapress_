const express = require("express");
const router = express.Router();
const User = require("./Users");

router.get("/admin/users", (req, res) =>  {
    res.send("Listagen de u suários");
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});

module.exports = router;
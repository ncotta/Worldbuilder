const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.clearCookie("token", { sameSite: "Lax"}).json("OK");
})

module.exports = router;
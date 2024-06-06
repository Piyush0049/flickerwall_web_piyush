const express = require('express');
const Screen = require('../Models/ScreenModel');
const router = express.Router();

router.post('/findorgcodeonly', async (req, res) => {
  const { orgnumber } = req.body;
  try {
    const newScreen = await Screen.findOne({ orgNumber: orgnumber });
    if (newScreen === null) {
      return res.status(400).json({ success: "fail", message: "Organisation code not found" });
    }
    return res.status(200).json(newScreen); 
  } catch (error) {
    console.error("Internal server error:", error);
    return res.status(500).json({ success: "fail", error: "Internal server error" }); // Consistent error response
  }
});

module.exports = router;

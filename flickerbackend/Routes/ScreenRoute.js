const express = require('express');
const Screen = require('../Models/ScreenModel');
const router = express.Router();

router.post('/', async (req, res) => {
  const { screenName, orgNumber } = req.body;

  try {
    const newScreen = new Screen({ screenName, orgNumber });
    await newScreen.save();
    res.status(201).json(newScreen); // Use json for response
  } catch (error) {
    res.status(400).json({ success: "fail", error: error.message }); // Consistent response format
  }
});


router.post('/findorgcodeonly', async (req, res) => {
  const { orgnumber } = req.body;
  try {
    const newScreen = await Screen.findOne({ orgNumber: orgnumber });
    if (newScreen === null) {
      return res.status(400).json({ success: false, message: "Organisation code not found", data: null });
    }
    return res.status(200).json({ data: newScreen, success: true });
  } catch (error) {
    console.log("Internal server error:", error);
    return res.status(500).json({ success: false, error: "Internal server error", data: null });
  }
});


router.post('/findscreenonly', async (req, res) => {
  const { screenName } = req.body;
  try {
    const newScreen = await Screen.findOne({ screenName });
    if (newScreen === null) {
      return res.status(400).json({ success: false, message: "Screen not found", data: null });
    }
    return res.status(200).json({ data: newScreen, success: true });
  } catch (error) {
    console.log("Internal server error:", error);
    return res.status(500).json({ success: false, error: "Internal server error", data: null });
  }
});

module.exports = router;



router.post('/findscreenorgcode', async (req, res) => {
  const { orgcode, screenname  } = req.body;
  try {
    const newScreen = await Screen.findOne({ orgNumber: orgcode });
    if (newScreen === null) {
      return res.status(400).json({ success: false, message: "Organisation code not found", data: null });
    }
    if (newScreen.screenName === screenname) {
      return res.status(200).json({ data: newScreen, success: true });
    }
  } catch (error) {
    console.log("Internal server error:", error);
    return res.status(500).json({ success: false, error: "Internal server error", data: null });
  }
});

module.exports = router;

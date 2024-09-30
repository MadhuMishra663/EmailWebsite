const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded!' });
  }

  res.status(200).json({
    message: 'File uploaded successfully!',
    url: req.file.path, 
    public_id: req.file.filename, 
  });
});

module.exports = router;

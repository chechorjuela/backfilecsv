// src/routes/index.js
const express = require('express');
const fileRoutes = require('./controllers/file.route');
const router = express.Router();

router.use('/file', fileRoutes);

module.exports = router;
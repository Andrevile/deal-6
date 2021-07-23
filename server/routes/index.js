const express = require('express');

const detailRouter = require('./detail-router');
const mainRouter = require('./main-router');
const writeRouter = require('./write-router');
// const myLocationRouter = require('./my-location-router');
const UserRouter = require('./user-router');
const UploadRouter = require('./upload');
const router = express.Router();

router.use('/detail', detailRouter);
router.use('/main', mainRouter);
router.use('/write', writeRouter);
// router.use('/my-location', myLocationRouter);
router.use('/user', UserRouter);
router.use('/upload', UploadRouter);

module.exports = router;

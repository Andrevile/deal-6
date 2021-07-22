const express = require('express');

// const detailRouter = require('./detail-router');
// const mainRouter = require('./main-router');
// const postRouter = require('./post-router');
// const myLocationRouter = require('./my-location-router');
const UserRouter = require('./user-router');

const router = express.Router();

// router.use('/detail', detailRouter);
// router.use('/main', mainRouter);
// router.use('/post', postRouter);
// router.use('/my-location', myLocationRouter);
router.use('/user', UserRouter);

module.exports = router;

const express = require('express');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const router = express.Router();
const multer = require('multer');
const config = require('../config/config');

const s3 = new AWS.S3({
	accessKeyId: config.accessKeyId,
	secretAccessKey: config.secretAccessKey,
	region: config.region,
});

const storage = multerS3({
	s3: s3,
	bucket: 'fgd-storeimage',
	contentType: multerS3.AUTO_CONTENT_TYPE,
	acl: 'public-read',
	metadata: function (req, file, cb) {
		cb(null, { fieldName: file.fieldname });
	},
	key: function (req, file, cb) {
		cb(null, `storeImages/${Date.now()}_${file.originalname}`);
	},
});

let upload = multer({ storage: storage }).single('file');
router.post('/', (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			return res.json({ success: false, err });
		}
		return res.json({ success: true, filePath: res.req.file.location });
	});
});

module.exports = router;

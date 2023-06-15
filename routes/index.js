var express = require('express');
var router = express.Router();

// import models
const testModel = require('../schema/test')
// csv package
const csv = require('csvtojson')
// implement multer 
const multer = require('multer')
const path = require("path");
let i = 1
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('inside destination');
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    console.log('inside filenames');
    console.log(file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + i + path.extname(file.originalname))
    i++
  }
})
const upload = multer({ storage: storage })




/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    res.render('index', { title: 'Express' });
  }
  catch (error) {
    console.log("error in / route inindex.js", error)
  }
});

router.post('/upload', upload.single('csvFile'), async function (req, res, next) {
  try {
    csv().fromFile(req.file.path).then(async (jsonObj) => {
      console.log("jsonObj", jsonObj, "fire =====")
      jsonObj.forEach(async (object) => {
        await testModel.create(object)
      });
    })

    res.redirect('/')
  }
  catch (error) {
    console.log("error at /upload route index.js ", error)
  }
})

module.exports = router;

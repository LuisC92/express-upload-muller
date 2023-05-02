const uploadRouter = require('express').Router()
const multer = require('multer')

const UploadController = require("../controllers/UploadController")

const upload = multer({dest: "./tmp"})

uploadRouter.post("/upload", upload.any() ,UploadController.upload)

module.exports = uploadRouter
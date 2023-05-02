const fs = require('fs');

const upload = (req, res) => {
   console.log(req.file)
    fs.rename(
        req.file.path,
        `public/images/${req.file.originalname}`,
        (err)=>{
            if(err){
                res.status(409).send(err)
            } else {
                res.status(203).json({
                    msg: "upload success",
                    url:`http://localhost:8001/public/images/${req.file.originalname}`
                })
            }
        }
    )
}

module.exports = {
    upload
}
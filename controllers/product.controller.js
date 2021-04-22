const db = require("../models");
const Product = db.product;

exports.insertProduct = async(req, res)=>{
    if (req.body){
        const prod = new Product({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price
          });
          await prod.save((err, user) => {
            if (err) {
              return res.status(500).send({ message: err });
            }
    
            return res.send({
              message:
                "Product inserted successfull!",
          });
        });
    }
}

exports.getProduct = async(req,res)=>{
    Product.find({},(err, docs) =>{
        if (err){
            res.status(500).send(err)
        }
        if (docs){
            res.send(docs)
        }
    })
}
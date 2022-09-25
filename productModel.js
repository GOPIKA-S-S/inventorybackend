const Mongoose=require("mongoose")
const productModel=Mongoose.model("products",Mongoose.Schema({
  
        pcategory:String,
        pname:String,
        model:String,
        color:String,
        price:String,
        qty:String,
        img:String
}))

module.exports={productModel}
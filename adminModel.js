const Mongoose=require("mongoose")
const adminModel=Mongoose.model("admins",Mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    shop:String,
    password:String
}))

module.exports={adminModel}
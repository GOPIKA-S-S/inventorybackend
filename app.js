const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Express=require("express")

const {adminModel}=require("./adminModel")
const{productModel}=require("./productModel")


const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())


Mongoose.connect("mongodb+srv://GOPIKA-S-S:dhanu824@cluster0.hhmqgj4.mongodb.net/InventoryDB?retryWrites=true&w=majority")

app.post("/signups",(req,res)=>{
    const regdata=req.body
    console.log(regdata)
    const ob=new adminModel(regdata)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {
           res.send(data)
        }
    })
})
app.post("/admin",async(req,res)=>{
    const product=req.body
    const ob=new productModel(product)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {
           res.send(data)
        }
    })
})



app.get("/product",async(req,res)=>{
    const product=req.body
    const ob=new productModel(product)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {
           res.send(data)
        }
    })
})


app.listen(3200,()=>{console.log("Server running at http://localhost:3200")})
const express = require("express")
const bodyparser = require("body-parser")

const app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res)=>{
    var x = Number(req.body.num1)
    var y = Number(req.body.num2)
    var r = x+y
    res.send("<h1> Result :  </h1>" + r)
})

app.listen(3000,()=>{
    console.log("server strated")
})
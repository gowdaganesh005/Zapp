import express from "express"
import axios from "axios";

const app=express();
app.use(express.json())

app.post("/bank-server",async (req:any,res:any)=>{
    const success:boolean=(Math.random()*10 > 1)
    if(success){
        const res=await axios.post("http://localhost:5000/bankWebhook",{
            token:req.body.token,
            transactionsId:req.body.transactionsId,
            userId: req.body.userId,
            amount: req.body.amount
        })
        console.log(res)
    }
    return res.status(200)
})

app.listen("8000",()=>{
    console.log("bank server running on port 8000")
})
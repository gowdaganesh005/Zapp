import express from "express"
import db from "@repo/db/db"

const app=express()
app.use(express.json())

app.post("/bankWebhook",async(req:any,res:any)=>{
    const paymentInformation={
        token:req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    }
    await db.transactions.update({
        where:{
            token:paymentInformation.token
        }
    })
})
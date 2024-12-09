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
    
    try {
        db.$transaction([
        await db.wallet.update({
            where:{
                userId:paymentInformation.userId
            },
            data:{
                amount:{
                    increment:paymentInformation.amount
                }
            }
        }),
        await db.transactions.update({
            where:{
                token:paymentInformation.token
            },
            data:{
                status:"Success"
            }
        })
        ])
        res.status(200).json({message:"Captured"})
    } catch (error) {
        res.status(500).json({message:"failed"})
        
    }
})
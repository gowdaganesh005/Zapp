import express from "express"
import db from "@repo/db/db"

const app=express()
app.use(express.json())

app.post("/bankWebhook",async(req:any,res:any)=>{
    console.log(req.body)
    const paymentInformation={
        token:req.body.token,
        transactionsId:req.body.transactionsId,
        userId: req.body.userId,
        amount: req.body.amount
    }
    
    try {
         db.$transaction([
         db.wallet.update({
            where:{
                ownerId:paymentInformation.userId
            },
            data:{
                balance:{
                    increment:paymentInformation.amount
                }
            }
        }),
         db.transactions.update({
            where:{
                transactionsId:paymentInformation.transactionsId
            },
            data:{
                status:"SUCCESS"
            }
        })
        ])
        res.status(200).json({message:"Captured"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed"})
        
    }
})

app.listen("5000",()=>{
    console.log("Server running on port 5000")
})
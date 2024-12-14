import prisma from "@repo/db/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "../../lib/NextAuth";
import axios from "axios";

export const POST=async (req:NextRequest,res:NextResponse)=>{
    const session:any=await getServerSession(NEXT_AUTH)
   
    const sender=session.user.userid

    const transaction=await req.json();
   
    const token=(Math.random()*1000).toString() || ""
    console.log(transaction)

    try{
        const res=await prisma.transactions.create({
            data:{
                token:token,
                senderId:sender,
                type:"WITHDRAWL",
                amount:parseInt(transaction.amount)*100
            },
            select:{
                transactionsId:true,
                token:true,
                amount:true,
                
            }
        })
         axios.post("http://localhost:8000/bank-server",{
            transactionsId:res.transactionsId,
            userId:sender,
            token,
            amount:res.amount,
        })
        
        

    }catch(error:any){
        console.log(error.message)
        return NextResponse.json({
            message:"Error creating transaction",
        },{status:505})
        

    }
    
    return NextResponse.json({
        message:"Transaction iniitiated"
    },
    {
        status:200
    })
  
    
}
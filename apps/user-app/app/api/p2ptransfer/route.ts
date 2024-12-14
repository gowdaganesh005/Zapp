import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "../../lib/NextAuth";
import prisma from "@repo/db/db";

export async function POST(req:NextRequest){
    const session:any=await getServerSession(NEXT_AUTH)
   
    const sender=session.user.userid
    

    const transaction=await req.json();
    const token=(Math.random()*100).toString()
    try {
        const reciever=await prisma.user.findFirst({
            where:{
                phoneNumber:transaction.phoneNumber
            },
            select:{
                userid:true
            }
        })
        const incre=await prisma.wallet.update({
            where:{
                ownerId:reciever?.userid
            },
            data:{
            balance:{
                increment:parseInt(transaction.amount)
            }
        }
        })
        const deduct=await prisma.wallet.update({
            where:{
                ownerId:sender,

            },
            data:{
                balance:{
                    decrement:transaction.amount
                }
            }
        })
        const tran=await prisma.transactions.create({
            data:{
                token:token,
                senderId:sender,
                recieverId:reciever?.userid || "",
                amount:transaction.amount,
                type:"P2P"

            },
            select:{
                transactionsId:true
            }
        })
        

    } catch (error:any) {
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
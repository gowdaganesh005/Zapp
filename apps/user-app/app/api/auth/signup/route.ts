import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/db";
import "body-parser"
import bcrypt from "bcrypt"

export async function POST(req:NextRequest,res:NextResponse){
    
    const  user:any =await req.json();
    console.log(user)
    
    
    try{
        const existingUser=await prisma.user.findFirst({
            where:{
                OR:[
                    {email:user?.email},
                    {phoneNumber:user.phoneNumber}
                ]
                
            }
        })
        if(existingUser){
            return NextResponse.json({message:"Users exists"},{
                status:411
            })
        }
        user.password=await bcrypt.hash(user.password,10)
        
        const createUser=await prisma.user.create({
            data:user,
            select:{
                userid:true,
                name:true,
                phoneNumber:true,
                email:true,
            }
        })
        console.log(createUser)
        
        return NextResponse.json({message:"user created"})
    }catch(error:any){
        console.log(error.message)
        
        return NextResponse.json({message:error},{
            status:500
        })

    }
}
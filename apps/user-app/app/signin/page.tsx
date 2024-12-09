"use client"

import {Button, ButtonType } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import CardWrapper from "@repo/ui/CardWrap"
import LabelledInput from "@repo/ui/LabelledInput"
import  "@repo/ui/styles.css"
import { signIn } from "next-auth/react"
import { useState } from "react"




export default function Signin(){

    const [PhoneNumber ,setPhoneNumber]=useState("")
    const [Password,setPassword]=useState("")

    const  handleClick=async ()=>{
        const res=await signIn("credentials",{
            PhoneNumber,
            Password
        })
        console.log(res);
    
    }
    return(
        <>
        
        <div className="flex justify-center items-center h-screen">
            <CardWrapper className="w-[80%]  max-w-screen-md" >
            <Card className="bg-gradient-to-b from-primary-900 to-primary-950  h-fit ">
                <div className="text-xl font-bold text-primary-300 text-center">
                    Sign In To Your Account
                </div>
                <LabelledInput onChange={(e:any)=>setPhoneNumber(e.target.value)} label="Phone Number" type="number" />
                <LabelledInput onChange={(e:any)=>setPassword(e.target.value)} label="Password" type="password" />
                <div className="flex justify-center items-center my-4">
                    <Button 
                    className="text-xl w-[96%] h-14 "
                    type={ButtonType.fill} 
                    onClick={handleClick}>
                        Signin
                    </Button>
                </div>
            </Card>
            </CardWrapper>    
        </div>
        </>
    )
}
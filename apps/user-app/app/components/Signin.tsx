"use client"

import {Button, ButtonType } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import CardWrapper from "@repo/ui/CardWrap"
import LabelledInput from "@repo/ui/LabelledInput"
import  "@repo/ui/styles.css"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import { useState } from "react"


export default function Signin(){
    const router=useRouter()
    const [phoneNumber ,setPhoneNumber]=useState("")
    const [password,setPassword]=useState("")

    const  handleClick=async ()=>{
        console.log(phoneNumber,"    ",password)
        try{
        const res=await signIn("credentials",{
            redirect:false,
            phoneNumber,
            password
        })
        console.log(res);

        if(res?.error){
            toast.error("Invalid credentials. Please try again.");
            return 
        }
        
        }catch(error:any){
            console.log(error)
            toast.error("Unexpected error occurred. Please try again")
            return 
        }
        router.push("/transactions")
        return 
    
        
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
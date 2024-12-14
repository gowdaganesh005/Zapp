"use client"
import { Button, ButtonType } from "@repo/ui/button"
import LabelledInput from "@repo/ui/LabelledInput"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

export default function AddMoney({phoneNumber}:{phoneNumber:boolean}){
    const [amount,setAmount]=useState(0)
    const [Number,setNumber]=useState(0)
    let transaction
    if(phoneNumber){
        
         transaction={amount,phoneNumber:Number}
    }
    else{
         transaction={amount}
    }
    

    const paynow=async ()=>{
        if(!phoneNumber){
        try {
            await axios.post("http://localhost:3000/api/addToWallet",transaction)
        } catch (error) {
            toast.error("Error initiating a Transaction")
            return 
        }
        toast.success("Payment Initiated")
    }
    else{
        try {
            await axios.post("http://localhost:3000/api/p2ptransfer",transaction)
        } catch (error) {
            toast.error("Error initiating a Transaction")
            return 
        }
        toast.success("Payment Initiated")

    }

        

    }
    return(
        <>
        {phoneNumber?(<LabelledInput label="Phone Number" type="number" onChange={(e:any)=>{setNumber(e.target.value)}}/>):<></>}
        <LabelledInput className="" label="Amount" type="number" onChange={(e:any)=>{setAmount(e.target.value)}}/>
        <div className="flex justify-center h-10">
        <Button type={ButtonType.fill} className=" w-[96%] h-10"
        onClick={paynow}
        >Pay now</Button>
        </div>
        </>
    )
}
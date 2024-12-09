"use client"

import { Button, ButtonType } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import CardWrapper from "@repo/ui/CardWrap";
import LabelledInput from "@repo/ui/LabelledInput";
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import  "@repo/ui/styles.css"
import { UserSchemaSignUp } from "@repo/zodschema/UserSchema"
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";




export default  function SignUp(){
    const router=useRouter()
    const [userdata,setuserdata]=useState({
        name:"",
        email:"",
        phoneNumber:0,
        password:"",
    })

    const submit=async()=>{
        try{
            
            UserSchemaSignUp.parse(userdata)
        }
        catch(error:any){
            const zoderrors=error.errors
            
            toast.error(zoderrors[0].message)
            return
        }
        console.log(userdata)
        try {
            let res=await axios.post(`http://localhost:3000/api/auth/signup`,userdata)
            console.log(res)
            console.log("signing in")
            if(res.status==200){
                console.log("signing in")
                let signInResponse:any=await signIn("credentials",{
                    redirect:false,
                    phoneNumber:userdata.phoneNumber,
                    password: userdata.password
                })
                console.log("signing in")
                console.log(signInResponse)
                if(signInResponse?.error){
                    
                    toast.error("Error Authenticating User")
                    return 
                }
                
            }    
        } catch (error:any) {
            toast.error("Error While Creating User")
            return error.message
        }
        router.push(`/`)



        
        
    }

    const handleonChange=function(e:React.ChangeEvent<HTMLInputElement>,key:any){

        
        setuserdata((prev) => ({ ...prev, [key]: e.target.value }));

    }

    return(
        <>
        
        
        <div className="flex justify-center  items-center h-screen w-full md:w-1/3 ">
            <CardWrapper className="sm:w-2/3 max-w-sm w-[80%]  ">
            <Card className="  bg-gradient-to-b from-primary-900  to-primary-950 h-fit">
                <div className=" flex justify-center text-2xl font-semibold text-primary-400">
                    Create an Account
                </div>
                <LabelledInput onChange={(e:any)=>handleonChange(e,"name")}  label="Name" type="text"/>
                <LabelledInput onChange={(e:any)=>handleonChange(e,"email")}  label="Email" type="email"/>
                <LabelledInput onChange={(e:any) => handleonChange(e, "phoneNumber")}  label="Phone Number" type="number"/>
                <LabelledInput onChange={(e:any)=>handleonChange(e,"password")}  label="Password" type="password"/>
                <div className="flex justify-center">
                    <Button 
                    className="w-[95.5%] h-14 text-xl my-2" 
                    type={ButtonType.fill}
                    onClick={submit}
                    >
                        SignUp
                    </Button>            
                </div> 
            </Card>
            </CardWrapper>
        </div>

        
        </>
    )
}
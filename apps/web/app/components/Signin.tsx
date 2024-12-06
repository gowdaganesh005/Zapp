"use client"

import { Button, ButtonType } from "@repo/ui/button"

function SignIn(){
    const handlefunction=()=>{
        console.log("Sigin logic")
    }
    return(
        <Button  onClick={handlefunction} type={ButtonType.fill} >SignIn</Button>
    ) 
    
}

function SignUp(){
    const handlefunction=()=>{
        console.log("Sigup logic")
    }
    return(
        <Button onClick={handlefunction} type={ButtonType.transparent} >SignUp</Button>
    ) 
    
}

function SignOut(){
    const handlefunction=()=>{
        console.log("Sigout logic")
    }
    return(
        <Button onClick={handlefunction} type={ButtonType.transparent} >SignOut</Button>
    ) 
    
}

export { SignIn, SignOut, SignUp}
import { ReactNode } from "react"
import { Button } from "./button.js"

interface AppbarProps{
    title:      string,
    isAuth:     boolean,
    className?: string
    buttons:   {
        SignIn:     ()=>React.JSX.Element,
        SignUp:     ()=>React.JSX.Element,
        SignOut:    ()=>React.JSX.Element,
    }
}

const Appbar=({title,isAuth,className,buttons}:AppbarProps)=>{
    return(
        <>
        <div className={"sticky top-0 p-2 bg-primary-800 backdrop-filter backdrop-blur-sm bg-opacity-30  w-screen  flex justify-between shadow-md shadow-primary-900 "}>
            <div className="text-3xl font-bold px-4">
                {title}
            </div>
            <div  className=" md:flex md:opacity-100  display-none hidden  py-2 ">
                
                    {isAuth? <buttons.SignOut/>:<>{<buttons.SignIn/>} {<buttons.SignUp/>}</>}
                
                
            </div>

        </div>
        </>
    )
}

export default Appbar
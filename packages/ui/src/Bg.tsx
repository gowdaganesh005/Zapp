import Blob from "./Blob.js"
import { type JSX } from "react";

export default function(
    {children}:
    {children:any}){
    return(
        <>
        <div className="fixed inset-0 h-screen w-screen bg-gradient-to-br from-black  via-gray-900  to-primary-950 [background-size:200%] -z-20 ">
            <div className=" fixed bottom-0 right-0">
            
          <Blob className="absolute bottom-0 right-0 -z-30" />
        
            </div>
            <div className="relative z-10 ">
                {children}
            
            </div>
            
            

        </div>
        </>
    )
}
"use client"
import { Card } from "@repo/ui/card";


export default function WalletBalance({amount}:{amount:number}){
    
    return (
        <Card >
            <div>Wallet Balance: </div>
            <div className="font-bold text-gray-900">{amount}</div>
            <div className="h-0.5 bg-gray-300"></div>
            
        </Card>
    )
}
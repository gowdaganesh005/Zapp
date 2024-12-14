import { Card } from "@repo/ui/card";
import "@repo/ui/styles.css"
import AddMoney from "./AddMoney";
import RecentTransactions from "./RecentTransactions";
import WalletBalance from "./WalletBalance";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/NextAuth";
import prisma from "@repo/db/db";
import Sidebar from "./Sidebar";

async function fetchtransactions(){
    const session=await getServerSession(NEXT_AUTH)
    const res=await prisma.transactions.findMany({
        where:{
            senderId:session.user.userid
        }
    })
    console.log(res)
    return res;
}

async function fetchBalance(){
    const session =await getServerSession(NEXT_AUTH);
    const res=await prisma.wallet.findFirst({
        where:{
            ownerId:session.user.userid
        }
        
    })
    return (res?.balance || 0) / 100
}

export default async function({phoneNumber}:{phoneNumber:boolean}){
    
    const transactions=await fetchtransactions() 
    const balance=await fetchBalance()
    
    return(
        <>
        <div className="grid grid-cols-10">
            
            <div className="bg-gray-200  col-span-2 h-screen ">
            <Sidebar/>
            </div>
            
            <div className="bg-slate-200  col-span-8 ">
            <div className=" w-full grid grid-cols-2">
               
                <Card className="m-1">
                    <div>Transactions</div>
                    <div className="grid grid-cols-4">
                        
                        <div className="col-span-4 h-full">
                            <Card>
                                <div>{phoneNumber?"Send Money":"Add To Wallet"}</div>
                                <AddMoney phoneNumber={phoneNumber}/>
                            </Card>
                        </div>
                    </div>

                </Card>
                <div>
                    <WalletBalance amount={balance || 0}/>
                
                <Card>
                    <div>Recent Transactions</div>
                    <RecentTransactions transactions={transactions} />
                </Card>
                </div>
                
            </div>
            </div>

        </div>
        </>
    )
}
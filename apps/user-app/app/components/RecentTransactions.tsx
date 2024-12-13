export default function RecentTransactions({transactions}:any){
    console.log(transactions)
    return (
        <>
        {transactions.map((item:any)=>(
        <div key={item.transactionsId}>
            <div>
            <div className="text-sm text-gray-950">
                {item.type}
            </div>
            <div className="text-gray-950">
                

            </div>
            </div>
            <div className="flex flex-col items-end text-gray-950">
                {item.amount /100}
            </div>
            </div>
            
        ))}
        </>
    )
}
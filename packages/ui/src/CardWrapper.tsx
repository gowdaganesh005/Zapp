
export default function({children,className}:{
    children:any,
    className?: string
}){
    
    return(
    <div className={`hover:card-wrapper p-[2px] ${className}`}>
        {children}
    </div>
    )
}
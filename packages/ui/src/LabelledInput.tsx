export default function LabelledInput({className,label,type,onChange}:{
    className?: string,
    label:      string,
    type:       string,
    onChange:   React.ChangeEventHandler
}){
    return(
        <>
        <div className="flex justify-center items-center w-full py-3">
            <div className="w-[90%] flex flex-col ">
                

            <label className="text-primary-200 text-md mb-1">{label}</label>
            <input 
            onChange={onChange}
            className={`w-full h-10 rounded-lg bg-primary-500 opacity-60 m-x px-2`}
            type={type} />
            
            </div>
        </div>
        </>
    )
}
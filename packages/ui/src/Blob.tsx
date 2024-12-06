export default function({className}:{className:string}){
    return(
    <div className={` w-96 h-96 flex relative ${className}`}>
        <div className=" absolute w-64 h-64 rounded-full bg-violet-600 left-0 top-0  mix-blend-multiply opacity-30 animate-blob animation-delay-2 blur-xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-red-600 right-8 top-8  mix-blend-overlay opacity-30 animate-blob blur-xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-yellow-600 left-12 top-24  mix-blend-multiply opacity-30 animate-blob animation-delay-4 blur-xl"></div>
    </div>
    )
}